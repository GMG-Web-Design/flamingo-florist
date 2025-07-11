import React, { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionProps {
  children: ReactNode
  variant?: 'light' | 'dark'
  className?: string
}

export const Section = ({ children, variant = 'light', className }: SectionProps) => {
  return (
    <section
      className={clsx(
        'py-16 lg:py-24', // Base padding
        {
          'bg-cream': variant === 'light',
          'bg-deep-navy text-cream': variant === 'dark',
        },
        className
      )}
    >
      {children}
    </section>
  )
}