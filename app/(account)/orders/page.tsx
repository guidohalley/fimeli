import { OrderCard } from '@/components/account/order-card'

// Mock order data
const orders = [
  {
    id: 'ORD-2025-001',
    date: '2025-01-10',
    status: 'delivered' as const,
    total: 299.99,
    items: [
      {
        id: 1,
        name: 'Producto Premium 1',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&w=400',
        price: 299.99,
        quantity: 1
      }
    ]
  },
  {
    id: 'ORD-2025-002',
    date: '2025-01-08',
    status: 'shipped' as const,
    total: 199.99,
    items: [
      {
        id: 2,
        name: 'Producto Premium 2',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&w=400',
        price: 199.99,
        quantity: 1
      }
    ]
  },
  {
    id: 'ORD-2025-003',
    date: '2025-01-05',
    status: 'processing' as const,
    total: 449.98,
    items: [
      {
        id: 3,
        name: 'Producto Premium 3',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&w=400',
        price: 149.99,
        quantity: 1
      },
      {
        id: 4,
        name: 'Producto Premium 4',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&w=400',
        price: 299.99,
        quantity: 1
      }
    ]
  }
]

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Mis Pedidos
        </h1>
        <p className="text-gray-600">
          Revisa el estado y detalles de todos tus pedidos
        </p>
      </div>

      <div className="space-y-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No tienes pedidos aún
            </h3>
            <p className="text-gray-600 mb-6">
              Cuando realices tu primera compra, aparecerá aquí
            </p>
            <a 
              href="/search"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Explorar Productos
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
