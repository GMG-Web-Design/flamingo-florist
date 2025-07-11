import type { Config } from 'tailwindcss'
import * as tokens from './design/system/tokens'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...tokens,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    // Custom design tokens
    'max-w-container',
    'text-flamingo-pink',
    'text-coral-sunset',
    'text-dusty-rose',
    'text-sage-green',
    'text-soft-gold',
    'text-deep-navy',
    'text-warm-gray',
    'bg-flamingo-pink',
    'bg-coral-sunset',
    'bg-dusty-rose',
    'bg-sage-green',
    'bg-cream',
    'bg-soft-gold',
    'bg-deep-navy',
    'bg-warm-gray',
    'border-flamingo-pink',
    'border-coral-sunset',
    'border-dusty-rose',
    'border-sage-green',
    'border-soft-gold',
    'border-deep-navy',
    'border-warm-gray',
    'hover:bg-flamingo-pink',
    'hover:bg-coral-sunset',
    'hover:bg-dusty-rose',
    'hover:bg-sage-green',
    'hover:bg-soft-gold',
    'hover:bg-deep-navy',
    'hover:text-white',
    'hover:text-flamingo-pink',
    
    // Layout primitive dynamic classes
    'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6',
    'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12',
    'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5', 'md:col-span-6',
    'md:col-span-7', 'md:col-span-8', 'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12',
    'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6',
    'lg:col-span-7', 'lg:col-span-8', 'lg:col-span-9', 'lg:col-span-10', 'lg:col-span-11', 'lg:col-span-12',
    
    // Typography classes
    'font-display',
    'font-body',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    
    // Animation classes
    'animate-fade-in',
    'animate-slide-up',
    'animate-float',
    'animate-shimmer',
  ],
  plugins: [],
}

export default config