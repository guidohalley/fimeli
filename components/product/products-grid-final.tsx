'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'

export function ProductGrid() {
  // Mostrar los primeros 6 productos  
  const displayProducts = products.slice(0, 6)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayProducts.map((product) => (
        <div
          key={product.id}
          className="group relative bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border overflow-hidden"
        >
          {/* Badge de descuento o destacado */}
          {(product.discount || product.highlight) && (
            <div className="absolute top-4 left-4 z-10">
              {product.highlight && (
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full mb-2 block">
                  {product.highlight}
                </span>
              )}
              {product.discount && (
                <span className="bg-destructive text-destructive-foreground px-3 py-1 text-sm font-semibold rounded-full">
                  {product.discount}
                </span>
              )}
            </div>
          )}

          {/* Imagen del producto */}
          <div className="relative aspect-square bg-muted/30 overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Información del producto */}
          <div className="p-6">
            <div className="mb-3">
              <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                {product.category}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Variaciones si existen */}
            {product.variations && (
              <p className="text-xs text-muted-foreground mb-3">
                {product.variations}
              </p>
            )}

            {/* Precio */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.installments && (
                <p className="text-sm text-muted-foreground">
                  {product.installments}
                </p>
              )}
            </div>

            {/* Envío gratis */}
            {product.shipping && (
              <div className="mb-4">
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                  ✓ {product.shipping}
                </span>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex gap-2">
              <Button 
                asChild
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                <Link href={`/product/${product.slug}`}>
                  Ver Detalles
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="shrink-0"
                title="Agregar a favoritos"
              >
                <span className="sr-only">Favorito</span>
                ♡
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
