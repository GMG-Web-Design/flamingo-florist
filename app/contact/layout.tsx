import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Flamingo Florist',
  description: 'Get in touch with Flamingo Florist for your custom floral arrangements. Call us at (555) 123-4567 or visit our shop at 123 Flower Street.',
  keywords: ['contact florist', 'floral consultation', 'flower shop location', 'florist phone number'],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}