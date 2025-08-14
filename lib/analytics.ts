// Configuración de analytics y tracking
interface AnalyticsEvent {
  name: string
  properties: Record<string, any>
  userId?: string
  timestamp: Date
}

interface ProductView {
  productId: string
  productName: string
  category: string
  price: number
}

interface PurchaseEvent {
  orderId: string
  products: {
    productId: string
    name: string
    category: string
    price: number
    quantity: number
  }[]
  total: number
  currency: string
}

class Analytics {
  private events: AnalyticsEvent[] = []

  track(eventName: string, properties: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: new Date()
    }

    this.events.push(event)
    
    // En una implementación real, aquí enviarías el evento a tu servicio de analytics
    console.log('Analytics Event:', event)
    
    // Ejemplo de integración con Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties)
    }
  }

  // Eventos específicos de ecommerce
  trackProductView(product: ProductView) {
    this.track('product_view', {
      product_id: product.productId,
      product_name: product.productName,
      category: product.category,
      price: product.price
    })
  }

  trackAddToCart(product: ProductView, quantity: number = 1) {
    this.track('add_to_cart', {
      product_id: product.productId,
      product_name: product.productName,
      category: product.category,
      price: product.price,
      quantity
    })
  }

  trackRemoveFromCart(product: ProductView, quantity: number = 1) {
    this.track('remove_from_cart', {
      product_id: product.productId,
      product_name: product.productName,
      category: product.category,
      price: product.price,
      quantity
    })
  }

  trackBeginCheckout(products: ProductView[], total: number) {
    this.track('begin_checkout', {
      products: products.map(p => ({
        product_id: p.productId,
        product_name: p.productName,
        category: p.category,
        price: p.price
      })),
      total
    })
  }

  trackPurchase(purchase: PurchaseEvent) {
    this.track('purchase', {
      order_id: purchase.orderId,
      products: purchase.products,
      total: purchase.total,
      currency: purchase.currency
    })
  }

  trackSearch(query: string, results: number) {
    this.track('search', {
      search_query: query,
      results_count: results
    })
  }

  trackPageView(path: string, title?: string) {
    this.track('page_view', {
      page_path: path,
      page_title: title
    })
  }

  // Método para obtener todos los eventos (útil para debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events]
  }

  // Limpiar eventos (útil para testing)
  clearEvents() {
    this.events = []
  }
}

// Instancia singleton
const analytics = new Analytics()

export { analytics }
export type { AnalyticsEvent, ProductView, PurchaseEvent }

// Hooks para React
export const useAnalytics = () => {
  return {
    track: analytics.track.bind(analytics),
    trackProductView: analytics.trackProductView.bind(analytics),
    trackAddToCart: analytics.trackAddToCart.bind(analytics),
    trackRemoveFromCart: analytics.trackRemoveFromCart.bind(analytics),
    trackBeginCheckout: analytics.trackBeginCheckout.bind(analytics),
    trackPurchase: analytics.trackPurchase.bind(analytics),
    trackSearch: analytics.trackSearch.bind(analytics),
    trackPageView: analytics.trackPageView.bind(analytics)
  }
}

// Para uso en Server Components
export const trackServerEvent = (eventName: string, properties: Record<string, any> = {}) => {
  // En server components, podrías enviar eventos directamente a tu API de analytics
  console.log('Server Analytics Event:', { eventName, properties, timestamp: new Date() })
}

// Declaración de tipos para Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
