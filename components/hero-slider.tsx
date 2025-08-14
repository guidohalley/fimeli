'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'

const sliderImages = [
  {
    src: '/images/slider/overhead-view-of-mature-couple-and-two-children-pl-2025-04-04-16-18-44-utc.jpg',
    title: 'Comodidad para toda la familia',
    subtitle: 'Alfombras y mantas que crean momentos especiales en el hogar'
  },
  {
    src: '/images/slider/remote-work-young-woman-using-laptop-in-a-cozy-ar-2024-10-16-07-48-48-utc.jpg',
    title: 'Tu espacio de trabajo perfecto',
    subtitle: 'Crea un ambiente cálido y profesional con nuestros productos'
  },
  {
    src: '/images/slider/slipper-on-grey-carpet-on-floor-at-home-2025-03-26-03-03-39-utc.jpg',
    title: 'Suavidad bajo tus pies',
    subtitle: 'Alfombras de alta calidad para cada rincón de tu hogar'
  },
  {
    src: '/images/slider/muslin-blanket-and-wooden-toys-in-baby-cradle-2025-02-24-21-55-12-utc.jpg',
    title: 'Para los más pequeños',
    subtitle: 'Mantas suaves y seguras para el bienestar de tu bebé'
  }
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [floatingProducts, setFloatingProducts] = useState(products.slice(0, 4))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-fimeli-cream/20 to-fimeli-orange/10">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="text-white space-y-6 max-w-xl">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-fimeli-orange/90 rounded-full text-sm font-medium">
                ✨ Fimeli - Tu hogar, tu estilo
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {sliderImages[currentSlide].title}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {sliderImages[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-fimeli-orange hover:bg-fimeli-orange/90 text-white px-8 py-4 text-lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explorar Productos
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-fimeli-orange px-8 py-4 text-lg"
              >
                Ver Ofertas
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center">
                <span className="block w-2 h-2 bg-fimeli-orange rounded-full mr-2"></span>
                Envío gratis +$50.000
              </div>
              <div className="flex items-center">
                <span className="block w-2 h-2 bg-fimeli-orange rounded-full mr-2"></span>
                Calidad premium
              </div>
            </div>
          </div>

          {/* Right Content - Floating Products */}
          <div className="hidden lg:block relative">
            <div className="relative h-[500px]">
              {floatingProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`absolute bg-white rounded-2xl shadow-2xl p-4 transform transition-all duration-3000 hover:scale-105 hover:shadow-3xl ${
                    index === 0 ? 'top-0 right-0 w-48 animate-float-1' :
                    index === 1 ? 'top-20 left-0 w-44 animate-float-2' :
                    index === 2 ? 'bottom-20 right-8 w-46 animate-float-3' :
                    'bottom-0 left-16 w-42 animate-float-4'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="relative h-32 mb-3 overflow-hidden rounded-xl">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-fimeli-orange font-bold text-sm">
                      ${product.price.toLocaleString('es-AR')}
                    </span>
                    <Button size="sm" className="h-8 w-8 p-0 bg-fimeli-orange hover:bg-fimeli-orange/90">
                      <ShoppingBag className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-fimeli-orange scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
