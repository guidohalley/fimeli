import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fimeli</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Tu tienda de confianza en Posadas, Misiones. Ofrecemos productos para el hogar 
              de calidad: decoración, muebles, electrodomésticos y tecnología para hacer 
              tu casa más cómoda y conectada.
            </p>
            <div className="text-background/80 space-y-1">
              <p className="font-medium">Posadas, Misiones - Argentina</p>
              <p>Lunes a Sábados: 9:00 - 20:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-background/80">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/search?category=ofertas" className="hover:text-primary transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-primary transition-colors">
                  Mi Cuenta
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-3 text-background/80">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Entregas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Garantías
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2025 Fimeli. Todos los derechos reservados. Posadas, Misiones - Argentina</p>
        </div>
      </div>
    </footer>
  )
}
