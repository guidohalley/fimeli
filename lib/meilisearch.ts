// Configuración de MeiliSearch (alternativa self-hosted a Algolia)
import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_URL || 'http://localhost:7700',
  apiKey: process.env.MEILISEARCH_MASTER_KEY || 'your-master-key'
})

const indexName = 'products'

export interface Product {
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
  inStock: boolean
  tags: string[]
}

export const initializeIndex = async () => {
  try {
    const index = client.index(indexName)
    
    // Configurar atributos de búsqueda
    await index.updateSearchableAttributes([
      'name',
      'description', 
      'category',
      'brand',
      'tags'
    ])

    // Configurar atributos para filtros
    await index.updateFilterableAttributes([
      'category',
      'brand',
      'price',
      'rating',
      'inStock'
    ])

    // Configurar atributos para ordenamiento
    await index.updateSortableAttributes([
      'price',
      'rating',
      'createdAt'
    ])

    console.log('MeiliSearch index configured successfully')
  } catch (error) {
    console.error('Error configuring MeiliSearch index:', error)
  }
}

export const searchProducts = async (
  query: string,
  options: {
    filters?: string[]
    sort?: string[]
    limit?: number
    offset?: number
  } = {}
) => {
  try {
    const index = client.index(indexName)
    
    const searchParams: any = {
      q: query,
      limit: options.limit || 20,
      offset: options.offset || 0,
    }

    if (options.filters?.length) {
      searchParams.filter = options.filters
    }

    if (options.sort?.length) {
      searchParams.sort = options.sort
    }

    const results = await index.search(searchParams)
    
    return {
      hits: results.hits as Product[],
      totalHits: results.estimatedTotalHits,
      page: Math.floor((options.offset || 0) / (options.limit || 20)),
      totalPages: Math.ceil((results.estimatedTotalHits || 0) / (options.limit || 20))
    }
  } catch (error) {
    console.error('Error searching products:', error)
    return {
      hits: [],
      totalHits: 0,
      page: 0,
      totalPages: 0
    }
  }
}

export const addProduct = async (product: Product) => {
  try {
    const index = client.index(indexName)
    await index.addDocuments([product])
    console.log(`Product ${product.id} added to search index`)
  } catch (error) {
    console.error('Error adding product to index:', error)
  }
}

export const updateProduct = async (product: Product) => {
  try {
    const index = client.index(indexName)
    await index.updateDocuments([product])
    console.log(`Product ${product.id} updated in search index`)
  } catch (error) {
    console.error('Error updating product in index:', error)
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const index = client.index(indexName)
    await index.deleteDocument(productId)
    console.log(`Product ${productId} deleted from search index`)
  } catch (error) {
    console.error('Error deleting product from index:', error)
  }
}

export { client as meilisearchClient }
