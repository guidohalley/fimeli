'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart } from 'lucide-react'
import Image from 'next/image'

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/90 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-lg line-clamp-2 text-foreground">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <span className="text-primary">★</span>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">${product.price.toLocaleString('es-AR')}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ${product.originalPrice.toLocaleString('es-AR')}
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <Button className="w-full mt-4 bg-primary hover:bg-primary/90" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
