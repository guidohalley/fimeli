import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

// API route para revalidar cache de Next.js
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')
    const tag = searchParams.get('tag')
    const secret = searchParams.get('secret')

    // Verificar secret token para seguridad
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    if (path) {
      // Revalidar una ruta específica
      revalidatePath(path)
      return NextResponse.json({ 
        revalidated: true, 
        path,
        now: Date.now() 
      })
    }

    if (tag) {
      // Revalidar por tag
      revalidateTag(tag)
      return NextResponse.json({ 
        revalidated: true, 
        tag,
        now: Date.now() 
      })
    }

    return NextResponse.json({ 
      message: 'Missing path or tag parameter' 
    }, { status: 400 })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Método GET para verificar estado
export async function GET() {
  return NextResponse.json({
    message: 'Revalidation API is working',
    timestamp: new Date().toISOString()
  })
}
