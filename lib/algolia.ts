// Configuración de Algolia para búsqueda
import algoliasearch from 'algoliasearch'

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || 'your-app-id',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || 'your-search-api-key'
)

const searchIndex = client.initIndex('products')

export interface SearchFilters {
  categories?: string[]
  brands?: string[]
  priceRange?: [number, number]
  sizes?: string[]
  rating?: number
}

export interface SearchResult {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviews: number
}

export const searchProducts = async (
  query: string,
  filters: SearchFilters = {},
  page = 0,
  hitsPerPage = 20
) => {
  try {
    const searchParams: any = {
      query,
      page,
      hitsPerPage,
    }

    // Aplicar filtros
    if (filters.categories?.length) {
      searchParams.facetFilters = [
        ...filters.categories.map(cat => `category:${cat}`)
      ]
    }

    if (filters.brands?.length) {
      searchParams.facetFilters = [
        ...(searchParams.facetFilters || []),
        ...filters.brands.map(brand => `brand:${brand}`)
      ]
    }

    if (filters.priceRange) {
      searchParams.numericFilters = [
        `price>=${filters.priceRange[0]}`,
        `price<=${filters.priceRange[1]}`
      ]
    }

    const result = await searchIndex.search(query, searchParams)
    
    return {
      hits: result.hits as SearchResult[],
      nbHits: result.nbHits,
      page: result.page,
      nbPages: result.nbPages,
      facets: result.facets
    }
  } catch (error) {
    console.error('Error searching products:', error)
    return {
      hits: [],
      nbHits: 0,
      page: 0,
      nbPages: 0,
      facets: {}
    }
  }
}

export const getSearchSuggestions = async (query: string) => {
  try {
    const result = await searchIndex.search(query, {
      hitsPerPage: 5,
      attributesToRetrieve: ['name', 'category'],
    })

    return result.hits.map(hit => ({
      id: hit.objectID,
      name: hit.name,
      category: hit.category
    }))
  } catch (error) {
    console.error('Error getting suggestions:', error)
    return []
  }
}

export { client as algoliaClient }
