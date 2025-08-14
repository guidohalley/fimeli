'use client'

import { useState } from 'react'
import { CheckboxFilter, PriceRangeFilter } from '@/components/search/filter-components'

const categories = [
  { id: 'muebles', name: 'Muebles', count: 25 },
  { id: 'decoracion', name: 'Decoración', count: 18 },
  { id: 'electrodomesticos', name: 'Electrodomésticos', count: 12 },
  { id: 'iluminacion', name: 'Iluminación', count: 15 },
  { id: 'tecnologia', name: 'Tecnología', count: 9 },
  { id: 'textil', name: 'Textil Hogar', count: 14 }
]

const brands = [
  { id: 'philips', name: 'Philips', count: 12 },
  { id: 'samsung', name: 'Samsung', count: 8 },
  { id: 'lg', name: 'LG', count: 6 },
  { id: 'whirlpool', name: 'Whirlpool', count: 4 },
  { id: 'drean', name: 'Drean', count: 7 }
]

const materials = [
  { id: 'madera', name: 'Madera', count: 16 },
  { id: 'metal', name: 'Metal', count: 8 },
  { id: 'vidrio', name: 'Vidrio', count: 12 },
  { id: 'plastico', name: 'Plástico', count: 10 },
  { id: 'tela', name: 'Tela', count: 6 },
  { id: 'ceramica', name: 'Cerámica', count: 4 }
]

export function SearchFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 50000])

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Categorías</h3>
        <CheckboxFilter
          options={categories}
          selected={selectedCategories}
          onChange={setSelectedCategories}
        />
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Rango de Precio</h3>
        <PriceRangeFilter
          value={priceRange}
          onChange={setPriceRange}
          min={0}
          max={50000}
        />
        <div className="text-sm text-muted-foreground mt-2">
          Precios en pesos argentinos (ARS)
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Marcas</h3>
        <CheckboxFilter
          options={brands}
          selected={selectedBrands}
          onChange={setSelectedBrands}
        />
      </div>

      {/* Materials */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-foreground">Materiales</h3>
        <CheckboxFilter
          options={materials}
          selected={selectedMaterials}
          onChange={setSelectedMaterials}
        />
      </div>

      {/* Clear filters */}
      <button 
        className="w-full py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
        onClick={() => {
          setSelectedCategories([])
          setSelectedBrands([])
          setSelectedMaterials([])
          setPriceRange([0, 50000])
        }}
      >
        Limpiar Filtros
      </button>
    </div>
  )
}
