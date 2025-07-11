import React from 'react'

interface FlamingoIconProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const FlamingoIcon = ({ size = 'md', className }: FlamingoIconProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }
  
  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13L13.5 7.5C13.1 6.8 12.4 6.3 11.7 6.3C11 6.3 10.3 6.8 9.9 7.5L8.5 10.5L9.5 12L11 9.5L12.5 14L15 12L21 9ZM12 20.5L5.5 14L7 12.5L12 17.5L17 12.5L18.5 14L12 20.5Z" />
    </svg>
  )
}