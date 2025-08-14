// Productos generados desde datos reales de CSV
export interface Product {
  id: number
  name: string
  slug: string
  price: number
  originalPrice?: number
  discount?: string
  description: string
  longDescription: string
  images: string[]
  category: string
  brand?: string
  sku: string
  rating: number
  reviews: number
  inStock: boolean
  features: string[]
  specifications: {
    [key: string]: string
  }
  highlight?: string
  shipping?: string
  variations?: string
  installments?: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Alfombra Nórdica Living Peluda 2x1,40 Mts - Pelo Largo",
    slug: "alfombra-nordica-living-peluda-2x140-pelo-largo",
    price: 59912,
    originalPrice: 70485,
    discount: "15% OFF",
    description: "Alfombra nórdica de alta calidad con textura peluda, perfecta para crear ambientes cálidos en tu living.",
    longDescription: "Transforma tu espacio con esta elegante alfombra nórdica de pelo largo. Su diseño moderno y textura suave aportan calidez y estilo a cualquier ambiente del hogar, siendo ideal para livings y dormitorios.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_907694-MLA83502406489_042025-T.jpg"
    ],
    category: "Alfombras",
    brand: "Nórdica",
    sku: "ALF-NOR-001",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    shipping: "Envío gratis",
    installments: "6 cuotas de $11.679",
    features: [
      "Textura peluda de pelo largo",
      "Diseño nórdico moderno",
      "Ideal para living y dormitorios",
      "Fácil mantenimiento"
    ],
    specifications: {
      "Tamaño": "2x1,40 metros",
      "Material": "Poliéster de alta densidad",
      "Tipo de pelo": "Largo",
      "Estilo": "Nórdico",
      "Peso": "2,8 kg",
      "Garantía": "6 meses"
    }
  },
  {
    id: 2,
    name: "Alfombra Moderna Peluda 1x1,50 Mts - Dormitorio/Living",
    slug: "alfombra-moderna-peluda-1x150-dormitorio-living",
    price: 44693,
    originalPrice: 61284,
    discount: "27% OFF",
    description: "Alfombra moderna de pelo suave, perfecta para dormitorios y livings. Diseño contemporáneo y máximo confort.",
    longDescription: "Añade un toque de modernidad y confort a tu hogar. Esta alfombra de pelo suave es perfecta para crear zonas acogedoras tanto en dormitorios como en áreas de living.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_653526-MLA83210893532_042025-T.jpg"
    ],
    category: "Alfombras",
    brand: "Moderna",
    sku: "ALF-MOD-002",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    installments: "6 cuotas de $8.712",
    features: [
      "Diseño moderno y versátil",
      "Textura suave al tacto",
      "Multiuso: dormitorio y living",
      "Colores neutros elegantes"
    ],
    specifications: {
      "Tamaño": "1x1,50 metros",
      "Material": "Fibra sintética premium",
      "Tipo de pelo": "Mediano",
      "Estilo": "Moderno",
      "Peso": "1,5 kg",
      "Garantía": "6 meses"
    }
  },
  {
    id: 3,
    name: "Alfombra Nórdica Grande 2x2,40 Mts - Pelo Largo Living",
    slug: "alfombra-nordica-grande-2x240-pelo-largo-living",
    price: 87523,
    originalPrice: 98341,
    discount: "11% OFF",
    description: "Alfombra nórdica de gran tamaño con pelo largo, ideal para livings amplios. Disponible en 17 colores.",
    longDescription: "La alfombra perfecta para livings espaciosos. Su gran tamaño y diseño nórdico crean un ambiente elegante y acogedor, mientras que su variedad de colores se adapta a cualquier decoración.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_876035-MLA81922293138_012025-T.jpg"
    ],
    category: "Alfombras",
    brand: "Nórdica",
    sku: "ALF-NOR-003",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    shipping: "Envío gratis",
    installments: "6 cuotas de $17.062",
    variations: "Disponible en 17 colores",
    highlight: "MÁS VENDIDO",
    features: [
      "Tamaño extra grande ideal para livings",
      "17 opciones de colores",
      "Textura de pelo largo premium",
      "Producto más vendido"
    ],
    specifications: {
      "Tamaño": "2x2,40 metros",
      "Material": "Poliéster de alta calidad",
      "Tipo de pelo": "Largo",
      "Colores": "17 opciones disponibles",
      "Peso": "5,8 kg",
      "Garantía": "12 meses"
    }
  },
  {
    id: 4,
    name: "Alfombra Pequeña 100x60 cm - Pie de Cama Dormitorio",
    slug: "alfombra-pequena-100x60-pie-cama-dormitorio",
    price: 14852,
    originalPrice: 18113,
    discount: "18% OFF",
    description: "Alfombra compacta peluda ideal para pie de cama. Perfecta para dormitorios y espacios pequeños.",
    longDescription: "Completa la decoración de tu dormitorio con esta práctica alfombra. Su tamaño compacto la hace perfecta para colocar al pie de la cama o en cualquier rincón que necesite un toque de calidez.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_831933-MLA84057071450_052025-T.jpg"
    ],
    category: "Alfombras",
    brand: "Confort",
    sku: "ALF-PEQ-004",
    rating: 4.3,
    reviews: 45,
    inStock: true,
    installments: "6 cuotas de $2.895",
    variations: "Disponible en 13 colores",
    features: [
      "Tamaño perfecto para pie de cama",
      "13 colores disponibles",
      "Textura suave y peluda",
      "Fácil de limpiar y mantener"
    ],
    specifications: {
      "Tamaño": "100x60 centímetros",
      "Material": "Microfibra suave",
      "Tipo de pelo": "Corto-medio",
      "Colores": "13 opciones",
      "Peso": "0,6 kg",
      "Garantía": "6 meses"
    }
  },
  {
    id: 5,
    name: "Alfombra Nórdica XL 3x2 Mts - Grande Pelo Largo Living",
    slug: "alfombra-nordica-xl-3x2-grande-pelo-largo-living",
    price: 122022,
    description: "La alfombra más grande de nuestra colección nórdica. Ideal para livings espaciosos y áreas de estar amplias.",
    longDescription: "Impresiona con esta alfombra de dimensiones extraordinarias. Su diseño nórdico y pelo largo crean una zona de confort excepcional en livings de gran tamaño, perfecta para familias grandes.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_990486-MLA81922164290_012025-T.jpg"
    ],
    category: "Alfombras",
    brand: "Nórdica",
    sku: "ALF-NOR-005",
    rating: 4.9,
    reviews: 87,
    inStock: true,
    shipping: "Envío gratis",
    installments: "6 cuotas de $23.788",
    variations: "Disponible en 14 colores",
    features: [
      "Tamaño XL para espacios amplios",
      "14 colores exclusivos",
      "Máxima calidad de pelo largo",
      "Ideal para familias numerosas"
    ],
    specifications: {
      "Tamaño": "3x2 metros",
      "Material": "Poliéster premium de alta densidad",
      "Tipo de pelo": "Extra largo",
      "Colores": "14 opciones exclusivas",
      "Peso": "6,0 kg",
      "Garantía": "12 meses"
    }
  },
  {
    id: 6,
    name: "Manta Frazada Plush 1 Plaza y Media - Beige Natural",
    slug: "manta-frazada-plush-1-plaza-media-beige-natural",
    price: 9920,
    originalPrice: 19840,
    discount: "50% OFF",
    description: "Manta frazada de plush súper suave, perfecta para una persona. Color beige natural elegante.",
    longDescription: "Disfruta del máximo confort con esta manta de plush de calidad superior. Su textura ultra suave y color beige neutro la convierte en el complemento perfecto para tu descanso y relajación.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_935738-MLA84925228681_052025-AB.jpg"
    ],
    category: "Textiles",
    brand: "Plush Confort",
    sku: "MAN-PLU-006",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    installments: "6 cuotas de $2.354",
    features: [
      "Textura de plush ultra suave",
      "Tamaño ideal para una persona",
      "Color beige versátil",
      "Precio increíble con 50% descuento"
    ],
    specifications: {
      "Tamaño": "2x1,80 metros",
      "Material": "Plush de poliéster",
      "Plazas": "1 plaza y media",
      "Color": "Beige natural",
      "Peso": "1,2 kg",
      "Lavado": "Máquina agua fría"
    }
  },
  {
    id: 7,
    name: "Manta Frazada Flannel 2 Plazas y Media - Turquesa Pastel",
    slug: "manta-frazada-flannel-2-plazas-media-turquesa-pastel",
    price: 10855,
    originalPrice: 30155,
    discount: "64% OFF",
    description: "Manta de flannel para cama matrimonial. Color turquesa pastel relajante, perfecta para el descanso.",
    longDescription: "Experimenta el lujo del flannel con esta manta de gran tamaño. Su suavidad excepcional y hermoso color turquesa pastel crean un ambiente sereno y acogedor en tu dormitorio.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_851894-MLA84627427852_052025-AB.jpg"
    ],
    category: "Textiles",
    brand: "Flannel Premium",
    sku: "MAN-FLA-007",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    installments: "6 cuotas de $2.576",
    features: [
      "Flannel de calidad premium",
      "Tamaño extra grande para 2 plazas",
      "Color turquesa relajante",
      "Descuento increíble del 64%"
    ],
    specifications: {
      "Tamaño": "2,20x2,50 metros",
      "Material": "Flannel de algodón",
      "Plazas": "2 plazas y media",
      "Color": "Turquesa pastel",
      "Peso": "2,1 kg",
      "Lavado": "Máquina agua tibia"
    }
  },
  {
    id: 8,
    name: "Manta Frazada Flannel 1 Plaza y Media - Coral Cálido",
    slug: "manta-frazada-flannel-1-plaza-media-coral-calido",
    price: 10780,
    originalPrice: 26950,
    discount: "60% OFF",
    description: "Manta de flannel en hermoso color coral cálido. Suavidad y calidez para tu descanso diario.",
    longDescription: "Envuélvete en la calidez de esta manta de flannel en color coral. Su tono vibrante pero relajante aporta energía positiva a tu espacio mientras te brinda el máximo confort.",
    images: [
      "https://http2.mlstatic.com/D_Q_NP_2X_930389-MLA84925222577_052025-AB.jpg"
    ],
    category: "Textiles",
    brand: "Flannel Premium",
    sku: "MAN-FLA-008",
    rating: 4.5,
    reviews: 178,
    inStock: true,
    installments: "6 cuotas de $2.558",
    features: [
      "Color coral vibrante y cálido",
      "Flannel suave al tacto",
      "Tamaño perfecto para una persona",
      "Gran descuento del 60%"
    ],
    specifications: {
      "Tamaño": "2,20x1,80 metros",
      "Material": "Flannel de algodón premium",
      "Plazas": "1 plaza y media",
      "Color": "Coral cálido",
      "Peso": "1,8 kg",
      "Lavado": "Máquina agua tibia"
    }
  }
]

export const featuredProducts = products.filter(p => p.highlight === "MÁS VENDIDO" || p.discount)

export const categories = [
  "Alfombras",
  "Textiles",
  "Muebles", 
  "Decoración",
  "Iluminación",
  "Electrodomésticos"
]
