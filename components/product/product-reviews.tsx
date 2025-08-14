'use client'

interface ProductReviewsProps {
  productId: number
}

const mockReviews = [
  {
    id: 1,
    user: "María González",
    rating: 5,
    comment: "Excelente calidad, tal como se describe. Llegó en perfecto estado y muy rápido.",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    user: "Carlos Mendez",
    rating: 4,
    comment: "Muy buen producto, cumple con las expectativas. Recomendado.",
    date: "Hace 1 mes"
  },
  {
    id: 3,
    user: "Ana Silva",
    rating: 5,
    comment: "Hermoso producto, exactamente lo que esperaba. El envío fue súper rápido.",
    date: "Hace 3 semanas"
  }
]

export function ProductReviews({ productId }: ProductReviewsProps) {
  const reviews = mockReviews // En una app real, esto vendría de una API

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        Opiniones de Compradores
      </h2>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground">
                  {review.user}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < review.rating ? 'text-yellow-400' : 'text-muted-foreground'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {review.date}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <p className="text-muted-foreground">
          ¿Compraste este producto? 
          <span className="text-primary ml-2 cursor-pointer hover:underline">
            Dejanos tu opinión
          </span>
        </p>
      </div>
    </div>
  )
}
