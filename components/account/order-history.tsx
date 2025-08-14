'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OrderCard } from './order-card'

const mockOrders = [
  {
    id: '001',
    date: '15 Jul 2024',
    status: 'delivered' as const,
    total: 125000,
    items: 2
  },
  {
    id: '002',
    date: '10 Jul 2024',
    status: 'shipped' as const,
    total: 89000,
    items: 1
  },
  {
    id: '003',
    date: '05 Jul 2024',
    status: 'processing' as const,
    total: 67000,
    items: 3
  }
]

export function OrderHistory() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Historial de Pedidos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </CardContent>
    </Card>
  )
}
