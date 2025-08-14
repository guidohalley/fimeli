'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function UserProfile() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" placeholder="Tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" placeholder="Tu apellido" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="tu@email.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" placeholder="+54 9 11 1234-5678" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Dirección</Label>
          <Input id="address" placeholder="Tu dirección completa" />
        </div>
        
        <Button className="w-full md:w-auto">
          Actualizar Perfil
        </Button>
      </CardContent>
    </Card>
  )
}
