import React, { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-flamingo-pink focus:ring-offset-2 focus:ring-offset-cream whitespace-nowrap inline-flex items-center justify-center'
  
  const variantClasses = {
    primary: 'bg-flamingo-pink hover:bg-coral-sunset text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-sage-green hover:bg-deep-navy text-white shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-flamingo-pink hover:bg-flamingo-pink text-flamingo-pink hover:text-white shadow-md hover:shadow-lg',
  }
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm h-10 rounded-3xl min-w-[120px]',
    md: 'px-8 py-4 text-base h-14 rounded-3xl min-w-[140px]',
    lg: 'px-10 py-5 text-lg h-16 rounded-3xl min-w-[160px]',
  }
  
  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}