'use client'

import { Heart, Star, Package } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: "Amor por el Hogar",
    description: "Cada producto está pensado para crear espacios acogedores donde te sientas como en casa."
  },
  {
    icon: Star,
    title: "Calidad Premium",
    description: "Seleccionamos cuidadosamente cada alfombra y manta para garantizar durabilidad y confort."
  },
  {
    icon: Package,
    title: "Envío Seguro",
    description: "Entregamos con cuidado en Posadas para que tus productos lleguen en perfectas condiciones."
  }
]

export function FeaturedSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-foreground mb-4"
          >
            ¿Por qué elegir Fimeli?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Te ayudamos a crear el hogar que siempre soñaste con productos de calidad y servicio personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
