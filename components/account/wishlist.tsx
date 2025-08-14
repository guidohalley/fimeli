'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { products } from '@/data/products'

// Simulamos algunos productos en la wishlist
const wishlistItems = [products[0], products[1], products[2]]

export function WishList() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Lista de Deseos</CardTitle>
      </CardHeader>
      <CardContent>
        {wishlistItems.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No tienes productos en tu lista de deseos</p>
            <Button className="mt-4">
              Explorar Productos
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <div className="relative h-40 mb-3">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">
                    ${product.price.toLocaleString('es-AR')} ARS
                  </span>
                  <Button size="sm" variant="outline">
                    Remover
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
