'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type Product } from '@/data/products'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-6">
      {/* Categoría y SKU */}
      <div className="flex items-center gap-3">
        <Badge variant="secondary">{product.category}</Badge>
        {product.highlight && (
          <Badge className="bg-primary">{product.highlight}</Badge>
        )}
        <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
      </div>

      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {product.name}
        </h1>
        {product.brand && (
          <p className="text-lg text-muted-foreground">
            Marca: {product.brand}
          </p>
        )}
      </div>

      {/* Precio */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <div className="flex items-center gap-2">
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              {product.discount && (
                <Badge variant="destructive">{product.discount}</Badge>
              )}
            </div>
          )}
        </div>
        {product.installments && (
          <p className="text-lg text-muted-foreground">
            {product.installments}
          </p>
        )}
      </div>

      {/* Descripción corta */}
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Variaciones */}
      {product.variations && (
        <div>
          <h3 className="font-semibold text-foreground mb-2">Variaciones:</h3>
          <p className="text-muted-foreground">{product.variations}</p>
        </div>
      )}

      {/* Envío */}
      {product.shipping && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">
            ✓ {product.shipping}
          </p>
        </div>
      )}

      {/* Rating y reseñas */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="font-semibold">{product.rating}</span>
        </div>
        <span className="text-muted-foreground">
          ({product.reviews} opiniones)
        </span>
      </div>

      {/* Estado de stock */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'En stock' : 'Sin stock'}
        </span>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 pt-4">
        <Button 
          size="lg" 
          className="flex-1 bg-primary hover:bg-primary/90 text-lg py-6"
          disabled={!product.inStock}
        >
          {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="px-6 py-6"
          title="Agregar a favoritos"
        >
          ♡
        </Button>
      </div>

      {/* Características destacadas */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-foreground mb-4">
          Características principales:
        </h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
