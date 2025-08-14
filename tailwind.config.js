const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { 
            transform: "translateY(20px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateY(0)", 
            opacity: "1" 
          },
        },
        "float-1": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateY(-15px) rotate(1deg)",
            opacity: "0.9"
          },
        },
        "float-2": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateY(-20px) rotate(-1deg)",
            opacity: "0.9"
          },
        },
        "float-3": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateY(-10px) rotate(1deg)",
            opacity: "0.9"
          },
        },
        "float-4": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "1"
          },
          "50%": { 
            transform: "translateY(-25px) rotate(-1deg)",
            opacity: "0.9"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.3s ease-out",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 8s ease-in-out infinite",
        "float-3": "float-3 7s ease-in-out infinite",
        "float-4": "float-4 9s ease-in-out infinite",
      },
    },
  },
  plugins: [
    animate,
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
