import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductGallery } from '@/components/product/product-gallery'
import { ProductInfo } from '@/components/product/product-info'
import { ProductReviews } from '@/components/product/product-reviews'
import { ProductGrid } from '@/components/product/products-grid-final'
import { products } from '@/data/products'

// Función para obtener producto por slug
const getProduct = async (slug: string) => {
  return products.find(product => product.slug === slug) || null
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Gallery */}
        <div>
          <ProductGallery images={product.images} />
        </div>

        {/* Product Info */}
        <div>
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <div className="border-b border-border mb-8">
          <nav className="-mb-px flex space-x-8">
            <button className="border-b-2 border-primary py-2 px-1 text-sm font-medium text-foreground">
              Descripción
            </button>
            <button className="border-transparent hover:border-border py-2 px-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Especificaciones
            </button>
            <button className="border-transparent hover:border-border py-2 px-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Opiniones ({product.reviews})
            </button>
          </nav>
        </div>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-foreground">Acerca de este producto</h3>
          <p className="text-muted-foreground">{product.description}</p>
          
          <h4 className="text-foreground">Características principales</h4>
          <ul className="text-muted-foreground">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-16">
        <ProductReviews productId={product.id} />
      </div>

      {/* Related Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Te puede interesar también</h2>
        <ProductGrid />
      </section>
    </div>
  )
}
