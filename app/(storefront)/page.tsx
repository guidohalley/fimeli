import { ProductGrid } from '@/components/product/products-grid-final'
import { FeaturedSection } from '@/components/featured-section'
import { HeroSlider } from '@/components/hero-slider'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HeroSlider />
      <FeaturedSection />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Productos Destacados</h2>
          <ProductGrid />
        </div>
      </section>
    </div>
  )
}
