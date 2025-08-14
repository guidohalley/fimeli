'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/search/search-bar'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg 
              width="120" 
              height="34" 
              viewBox="0 0 1400 400" 
              className="h-8 w-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M72.65,144.11c0-49.08,23.39-78.61,90.49-78.61h182.2s0,0,0,0v38.33s0,0,0,0h-179.13c-33.74,0-49.85,10.73-49.85,41.03v42.18h130.65v38.34H116.36v110.87h-43.71v-192.15Z" 
                fill="currentColor"
              />
              <path 
                d="M301.68,336.35v-182.66h43.71v182.66h-43.71Z" 
                fill="currentColor"
              />
              <path 
                d="M399.72,142.2c0-49.08,15.72-78.61,86.66-78.61h23c23.39,0,41.41,7.67,54.83,23.01h4.98c13.81-15.34,30.68-23.01,54.07-23.01h23c70.94,0,87.04,29.53,87.04,78.61v194.22h-43.71s0,0,0,0v-193.45c0-36.81-16.48-39.88-46.4-39.88h-11.89c-26.45,0-42.95,6.14-42.95,39.12v194.22h-43.71v-193.46c0-33.74-16.48-39.88-42.95-39.88h-12.27c-29.91,0-46,3.07-46,39.88v193.46h-43.71v-194.22Z" 
                fill="currentColor"
              />
              <path 
                d="M787.95,257.23v-115.03c0-49.08,23.39-78.61,86.65-78.61h37.96c55.98,0,82.82,26.08,82.82,70.94v88.57c0,4.99-2.68,7.67-7.29,7.67h-156.44v26.84c0,29.52,16.11,39.88,50.62,39.88h27.22c19.56,0,41.41-6.14,41.41-23.4,0-9.06-.16-7.66,8.06-7.66h35.28c4.2,43.34-26.35,69.4-91.65,69.4h-27.99c-63.26,0-86.65-29.52-86.65-78.6ZM951.67,195.11v-60.58c0-23.39-18.41-31.44-42.18-31.44h-31.83c-29.91,0-46.01,10.36-46.01,39.88v52.15h120.02Z" 
                fill="currentColor"
              />
              <path 
                d="M1050.02,257.23V65.51s0,0,0,0h43.69s0,0,0,0v190.95c0,30.68,16.11,41.03,49.85,41.03h83.58s0,0,0,0v38.33h-86.66c-67.1,0-90.49-29.52-90.49-78.6Z" 
                fill="currentColor"
              />
              <path 
                d="M1280.81,65.51s0,0,0,0h43.7v53.69h-43.71v-53.68ZM1280.81,336.18v-182.48h43.71v182.48h-43.71Z" 
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/search" className="text-foreground hover:text-primary transition-colors font-medium">
              Productos
            </Link>
            <Link href="/search?category=ofertas" className="text-foreground hover:text-primary transition-colors font-medium">
              Ofertas
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden lg:block">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary/20">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* User */}
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-secondary/20">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t">
            <SearchBar />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/search" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link 
                href="/search?category=ofertas" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
