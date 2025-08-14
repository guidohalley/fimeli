// Configuración de autenticación (NextAuth.js)
export interface User {
  id: string
  name?: string
  email: string
  image?: string
  role: 'customer' | 'admin'
  createdAt: Date
}

export interface AuthOptions {
  providers: any[]
  callbacks: {
    jwt: (params: any) => Promise<any>
    session: (params: any) => Promise<any>
  }
  pages: {
    signIn: string
    signOut: string
    error: string
  }
}

// Mock authentication functions for the mockup
export const getCurrentUser = async (): Promise<User | null> => {
  // En una implementación real, esto obtendría el usuario de la sesión
  return {
    id: '1',
    name: 'Usuario Demo',
    email: 'demo@fimeli.com',
    role: 'customer',
    createdAt: new Date()
  }
}

export const signIn = async (provider: string, options?: any) => {
  // Mock sign in
  console.log(`Signing in with ${provider}`, options)
  return { ok: true, error: null }
}

export const signOut = async () => {
  // Mock sign out
  console.log('Signing out')
  return { ok: true }
}

export const signUp = async (data: {
  name: string
  email: string
  password: string
}) => {
  // Mock sign up
  console.log('Signing up', data)
  return {
    ok: true,
    user: {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      email: data.email,
      role: 'customer' as const,
      createdAt: new Date()
    }
  }
}

export const resetPassword = async (email: string) => {
  // Mock password reset
  console.log('Password reset requested for:', email)
  return { ok: true, message: 'Email de restablecimiento enviado' }
}

export const updateProfile = async (data: Partial<User>) => {
  // Mock profile update
  console.log('Updating profile', data)
  return {
    ok: true,
    user: {
      id: '1',
      name: data.name || 'Usuario Demo',
      email: data.email || 'demo@fimeli.com',
      role: 'customer' as const,
      createdAt: new Date()
    }
  }
}

// Utility functions
export const isAuthenticated = () => {
  // En una implementación real, verificaría la sesión
  return true
}

export const isAdmin = (user?: User | null) => {
  return user?.role === 'admin'
}

export const requireAuth = () => {
  if (!isAuthenticated()) {
    throw new Error('Authentication required')
  }
}

export const requireAdmin = () => {
  const user = getCurrentUser()
  if (!user || !isAdmin()) {
    throw new Error('Admin access required')
  }
}
