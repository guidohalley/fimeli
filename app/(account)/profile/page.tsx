import { getCurrentUser } from '@/lib/auth'
import { UserProfile } from '@/components/account/user-profile'
import { OrderHistory } from '@/components/account/order-history'
import { WishList } from '@/components/account/wishlist'

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4 text-foreground">Acceso Requerido</h1>
        <p className="text-muted-foreground mb-8">
          Necesitas iniciar sesión para acceder a tu cuenta.
        </p>
        <a 
          href="/auth/signin" 
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Iniciar Sesión
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Mi Cuenta
        </h1>
        <p className="text-muted-foreground">
          Gestiona tu información personal y el historial de compras
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <nav className="space-y-2">
            <a 
              href="#profile" 
              className="block px-4 py-2 bg-secondary text-foreground rounded-lg font-medium"
            >
              Información Personal
            </a>
            <a 
              href="#orders" 
              className="block px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Mis Pedidos
            </a>
            <a 
              href="#wishlist" 
              className="block px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Productos Favoritos
            </a>
            <a 
              href="#addresses" 
              className="block px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Direcciones de Envío
            </a>
            <a 
              href="#payment" 
              className="block px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Formas de Pago
            </a>
            <a 
              href="#settings" 
              className="block px-4 py-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Configuración
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-2 space-y-8">
          <section id="profile">
            <UserProfile user={user} />
          </section>
          
          <section id="orders">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Mis Pedidos</h2>
            <OrderHistory userId={user.id} />
          </section>
          
          <section id="wishlist">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Productos Favoritos</h2>
            <WishList userId={user.id} />
          </section>
        </main>
      </div>
    </div>
  )
}
