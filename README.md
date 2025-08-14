# Fimeli - Mockup de E-commerce

Mockup de frontend para Fimeli, tienda especializada en productos para el hogar ubicada en Posadas, Misiones, Argentina.

## 🏠 Acerca de Fimeli

Fimeli es una tienda dedicada a hacer tu hogar más cómodo y conectado. Ofrecemos una amplia gama de productos para el hogar incluyendo:

- **Muebles**: Sillones, mesas, estanterías y más
- **Decoración**: Elementos decorativos para personalizar tu espacio
- **Electrodomésticos**: Equipos para cocina y hogar
- **Iluminación**: Lámparas y sistemas de iluminación LED
- **Tecnología**: Dispositivos inteligentes para el hogar
- **Textil**: Cojines, cortinas y textiles decorativos

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Animaciones**: Framer Motion
- **Estado**: TanStack Query (React Query)
- **Validación**: Zod
- **Formularios**: React Hook Form

## 🎨 Identidad de Marca

### Colores
- **Naranja Principal**: #FFB703 - Color distintivo de Fimeli
- **Blanco Crema**: #EDE6E3 - Fondo suave y cálido
- **Gris Oscuro**: #39393A - Textos y elementos secundarios
- **Celeste**: #A8DADC - Acentos y elementos destacados

### Tipografía
- **Fuente Principal**: Montserrat (sans-serif moderna)
- **Tono de Comunicación**: Cercano, confidente y claro

## 📁 Estructura del Proyecto

```
fimeli/
├── app/
│   ├── (storefront)/           # Rutas públicas de la tienda
│   │   ├── layout.tsx          # Layout principal con navegación
│   │   ├── page.tsx            # Página de inicio
│   │   ├── search/             # Búsqueda y filtros
│   │   └── product/[slug]/     # Páginas de producto dinámicas
│   ├── (account)/              # Rutas de cuenta de usuario
│   │   ├── profile/
│   │   └── orders/
│   ├── api/                    # API routes
│   │   ├── revalidate/         # Revalidación de cache
│   │   └── webhooks/stripe/    # Webhooks de Stripe
│   ├── globals.css             # Estilos globales
│   └── layout.tsx              # Layout raíz
├── components/
│   ├── ui/                     # Componentes UI base (shadcn)
│   ├── product/                # Componentes relacionados a productos
│   ├── search/                 # Componentes de búsqueda y filtros
│   ├── navigation.tsx          # Navegación principal
│   ├── footer.tsx              # Footer
│   ├── hero-section.tsx        # Sección hero
│   └── featured-section.tsx    # Sección de características
├── lib/
│   ├── utils.ts                # Utilidades generales
│   ├── algolia.ts              # Configuración de Algolia
│   ├── meilisearch.ts          # Configuración de MeiliSearch
│   ├── auth.ts                 # Funciones de autenticación
│   └── analytics.ts            # Analytics y tracking
├── assets/                     # 📁 Carpeta para tus assets del cliente
└── package.json
```

## 🛠 Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 2. Configurar variables de entorno

Crea un archivo `.env.local`:

```env
# Algolia (opcional)
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_key

# MeiliSearch (opcional)
NEXT_PUBLIC_MEILISEARCH_URL=http://localhost:7700
MEILISEARCH_MASTER_KEY=your_master_key

# Stripe (opcional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Revalidación
REVALIDATION_SECRET=your_secret_token
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📸 Agregar Productos Reales

### En la carpeta `assets/`
Coloca aquí todas las imágenes y recursos de tu cliente. La estructura sugerida es:

```
assets/
├── products/
│   ├── product-1/
│   │   ├── main.jpg
│   │   ├── gallery-1.jpg
│   │   └── gallery-2.jpg
│   └── product-2/
├── logos/
├── banners/
└── README.md  # Lista de productos con títulos y descripciones
```

### Personalizar productos
Los productos están definidos como mock data en:
- `components/product/product-grid.tsx`
- `app/(storefront)/product/[slug]/page.tsx`

Reemplaza los datos de ejemplo con la información real de productos:

```typescript
const products = [
  {
    id: 1,
    name: "Nombre real del producto",
    price: 299.99,
    originalPrice: 399.99,
    image: "/assets/products/producto-1/main.jpg", // ← Tu imagen
    category: "Categoría real",
    description: "Descripción real del producto...",
    // ... más datos
  }
]
```

## 🎨 Características Implementadas

### ✅ Completado
- [x] Estructura de carpetas y configuración inicial
- [x] Layout responsivo con navegación
- [x] Página de inicio con hero y productos destacados
- [x] Sistema de componentes UI (shadcn/ui)
- [x] Grilla de productos con cards
- [x] Página de búsqueda con filtros
- [x] Páginas de producto dinámicas
- [x] Páginas de cuenta de usuario
- [x] APIs de ejemplo (webhooks, revalidación)
- [x] Configuración de librerías (Algolia, MeiliSearch, Analytics)
- [x] Animaciones con Framer Motion
- [x] Responsive design completo

### 🚧 Por Completar (opcional para mockup)
- [ ] Integración real con APIs de búsqueda
- [ ] Sistema de carrito de compras
- [ ] Checkout y pagos con Stripe
- [ ] Sistema de autenticación real
- [ ] Base de datos y persistencia
- [ ] Email notifications
- [ ] Admin dashboard

## 🎯 Componentes Faltantes

Algunos componentes están referenciados pero no creados (para mantener el mockup simple):

1. **Componentes de Producto**:
   - `ProductGallery`
   - `ProductInfo`
   - `ProductReviews`

2. **Componentes de Cuenta**:
   - `UserProfile`
   - `OrderHistory`
   - `WishList`
   - `OrderCard`

Estos se pueden crear según sea necesario para el mockup.

## 🚀 Despliegue Rápido

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta .next
```

## 📝 Notas para el Cliente

Este es un **mockup funcional** que demuestra:

1. **Arquitectura moderna**: Next.js 14, TypeScript, App Router
2. **UI/UX excepcional**: Componentes reutilizables, animaciones suaves
3. **SEO optimizado**: Server-side rendering, metadata dinámico  
4. **Escalabilidad**: Estructura preparada para crecimiento
5. **Performance**: Optimización de imágenes, lazy loading, caching

### Para convertir en producción:
- Integrar con base de datos real (Prisma + PostgreSQL)
- Configurar autenticación (NextAuth.js)
- Implementar pagos reales (Stripe)
- Añadir sistema de inventario
- Configurar monitoring y analytics

## 🤝 Próximos Pasos

1. **Revisar el mockup** funcionando en tu navegador
2. **Agregar productos reales** en la carpeta `assets/`
3. **Personalizar colores/marca** en `tailwind.config.js`
4. **Ajustar contenido** según tu negocio
5. **Decidir funcionalidades** para la versión de producción

---

**¿Listo para ver tu tienda online en acción?** 🚀

Ejecuta `npm run dev` y visita `http://localhost:3000`
