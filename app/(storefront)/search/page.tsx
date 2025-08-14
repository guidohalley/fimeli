import { SearchFilters } from '@/components/search/search-filters'
import { ProductGrid } from '@/components/product/products-grid-final'
import { SearchBar } from '@/components/search/search-bar'

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Encuentra lo que necesitas
        </h1>
        <p className="text-muted-foreground mb-4">
          Explora nuestro catálogo de productos para el hogar
        </p>
        <div className="max-w-2xl">
          <SearchBar />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <SearchFilters />
        </aside>

        {/* Products grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Mostrando 12 de 150 productos
            </p>
            <select className="border border-border rounded-lg px-3 py-2 text-sm bg-background focus:ring-2 focus:ring-primary">
              <option>Más relevantes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más vendidos</option>
              <option>Mejor valorados</option>
            </select>
          </div>
          
          <ProductGrid />
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-border rounded text-sm hover:bg-secondary transition-colors">
                Anterior
              </button>
              <button className="px-3 py-2 bg-primary text-primary-foreground rounded text-sm">
                1
              </button>
              <button className="px-3 py-2 border border-border rounded text-sm hover:bg-secondary transition-colors">
                2
              </button>
              <button className="px-3 py-2 border border-border rounded text-sm hover:bg-secondary transition-colors">
                3
              </button>
              <button className="px-3 py-2 border border-border rounded text-sm hover:bg-secondary transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
