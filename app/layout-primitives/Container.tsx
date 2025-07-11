import React, { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ContainerProps {
  children: ReactNode
  variant?: 'full' | 'boxed'
  className?: string
}

export const Container = ({ children, variant = 'boxed', className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'mx-auto px-4 lg:px-8',
        {
          'max-w-container': variant === 'boxed',
          'max-w-full': variant === 'full',
        },
        className
      )}
    >
      {children}
    </div>
  )
}