import React, { ReactNode } from 'react'
import { clsx } from 'clsx'

interface RowProps {
  children: ReactNode
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Row = ({ children, gap = 'md', className }: RowProps) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-12',
        {
          'gap-4': gap === 'sm',
          'gap-6': gap === 'md',
          'gap-8': gap === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  )
}