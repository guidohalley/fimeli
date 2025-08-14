'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/20 to-muted text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"></div>
      </div>

            <div className="relative z-20 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in"
          >
            Tu hogar
            <span className="text-primary">
              {' '}más cómodo{' '}
            </span>
            y conectado
          </h1>
          
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-delay-1"
          >
            Descubre nuestra selección de productos para el hogar: decoración, muebles, 
            electrodomésticos y tecnología. Te ayudamos a crear el espacio perfecto.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2"
          >
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
              Ver Productos
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-secondary text-foreground hover:bg-secondary/20"
            >
              Nuestras Ofertas
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  )
}
