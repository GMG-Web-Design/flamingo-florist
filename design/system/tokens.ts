// Design tokens for Flamingo Florist
// Based on brand guide specifications

export const colors = {
  // Primary brand colors
  'flamingo-pink': '#FF6B9D',
  'coral-sunset': '#FF8A80', 
  'dusty-rose': '#E8A598',
  
  // Secondary colors
  'sage-green': '#87A96B',
  'cream': '#F8F6F0',
  'soft-gold': '#D4A574',
  
  // Accent colors
  'deep-navy': '#2C3E50',
  'warm-gray': '#8B8680',
  
  // Semantic colors for UI
  'primary': '#FF6B9D',
  'secondary': '#87A96B',
  'accent': '#D4A574',
  'background': '#F8F6F0',
  'surface': '#FFFFFF',
  'text': '#2C3E50',
  'text-secondary': '#8B8680',
  'border': '#E8A598',
  
  // State colors
  'success': '#87A96B',
  'warning': '#D4A574',
  'error': '#FF6B9D',
  'info': '#2C3E50',
}

export const fontFamily = {
  'display': ['Playfair Display', 'serif'],
  'body': ['Inter', 'sans-serif'],
  'sans': ['Inter', 'sans-serif'],
  'serif': ['Playfair Display', 'serif'],
}

export const fontSize = {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
}

export const fontWeight = {
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
}

export const lineHeight = {
  'tight': '1.25',
  'normal': '1.5',
  'relaxed': '1.75',
}

export const letterSpacing = {
  'tight': '-0.025em',
  'normal': '0',
  'wide': '0.025em',
  'wider': '0.05em',
}

export const spacing = {
  'px': '1px',
  '0': '0',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
}

export const borderRadius = {
  'none': '0',
  'sm': '0.125rem',
  'DEFAULT': '0.25rem',
  'md': '0.375rem',
  'lg': '0.5rem',
  'xl': '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  'full': '9999px',
}

export const boxShadow = {
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  'none': 'none',
}

export const maxWidth = {
  'none': 'none',
  'xs': '20rem',
  'sm': '24rem',
  'md': '28rem',
  'lg': '32rem',
  'xl': '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  'full': '100%',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  'prose': '65ch',
  'container': '1200px', // Custom container width
}

export const animation = {
  'none': 'none',
  'spin': 'spin 1s linear infinite',
  'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'bounce': 'bounce 1s infinite',
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'shimmer': 'shimmer 2s linear infinite',
}

export const keyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  shimmer: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
}

// Brand-specific design tokens
export const brandTokens = {
  // Button styles
  button: {
    primary: {
      bg: 'bg-flamingo-pink',
      hover: 'hover:bg-coral-sunset',
      text: 'text-white',
      padding: 'px-8 py-4',
      radius: 'rounded-3xl',
      font: 'font-medium',
      transition: 'transition-all duration-300',
    },
    secondary: {
      bg: 'bg-sage-green',
      hover: 'hover:bg-deep-navy',
      text: 'text-white',
      padding: 'px-8 py-4',
      radius: 'rounded-3xl',
      font: 'font-medium',
      transition: 'transition-all duration-300',
    },
    outline: {
      bg: 'bg-transparent',
      border: 'border-2 border-flamingo-pink',
      hover: 'hover:bg-flamingo-pink',
      text: 'text-flamingo-pink hover:text-white',
      padding: 'px-8 py-4',
      radius: 'rounded-3xl',
      font: 'font-medium',
      transition: 'transition-all duration-300',
    },
  },
  
  // Typography styles
  typography: {
    hero: 'font-display text-6xl lg:text-7xl font-bold text-deep-navy leading-tight',
    h1: 'font-display text-5xl lg:text-6xl font-bold text-deep-navy leading-tight',
    h2: 'font-display text-4xl lg:text-5xl font-bold text-deep-navy leading-tight',
    h3: 'font-display text-3xl lg:text-4xl font-semibold text-deep-navy leading-tight',
    h4: 'font-display text-2xl lg:text-3xl font-semibold text-deep-navy leading-tight',
    body: 'font-body text-base lg:text-lg text-warm-gray leading-relaxed',
    caption: 'font-body text-sm text-warm-gray leading-normal',
    quote: 'font-display text-xl lg:text-2xl font-medium text-deep-navy italic leading-relaxed',
  },
  
  // Section styles
  section: {
    padding: 'py-16 lg:py-24',
    container: 'max-w-container mx-auto px-4 lg:px-8',
  },
}

// Export all tokens as a single object for easy consumption
export const tokens = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  boxShadow,
  maxWidth,
  animation,
  keyframes,
  brandTokens,
}