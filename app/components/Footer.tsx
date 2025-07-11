import React from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Section, Container, Row, Col } from '@/app/layout-primitives'

export const Footer = () => {
  return (
    <footer className="bg-deep-navy text-cream">
      <Section className="py-16">
        <Container>
          <Row gap="lg">
            {/* Logo and About */}
            <Col span={12} md={6} lg={4}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <SparklesIcon className="w-8 h-8 text-flamingo-pink" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-deep-navy">Flamingo Florist</h3>
                    <p className="text-deep-navy text-sm">30 Years of Making Moments Special</p>
                  </div>
                </div>
                <p className="text-deep-navy leading-relaxed mb-6">
                  We don&apos;t create cookie-cutter arrangements. We craft works of art that make people 
                  smile, cry happy tears, and feel truly special. Every flower tells a story.
                </p>
                <p className="text-flamingo-pink font-medium italic">
                  &quot;Everybody has a vision and we help guide to achieving whatever they need.&quot;
                </p>
              </div>
            </Col>

            {/* Contact Information */}
            <Col span={12} md={6} lg={4}>
              <div className="mb-8">
                <h4 className="font-display text-xl font-semibold mb-6 text-flamingo-pink">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                    <div>
                      <p className="font-medium text-deep-navy">(555) 123-4567</p>
                      <p className="text-warm-gray text-sm">Call and tell us your story</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <EnvelopeIcon className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                    <div>
                      <p className="font-medium text-deep-navy">hello@flamingoflorist.com</p>
                      <p className="text-warm-gray text-sm">We&apos;d love to hear from you</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                    <div>
                      <p className="font-medium text-deep-navy">123 Flower Street</p>
                      <p className="text-warm-gray text-sm">Your Town, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Business Hours & Services */}
            <Col span={12} md={12} lg={4}>
              <div className="mb-8">
                <h4 className="font-display text-xl font-semibold mb-6 text-flamingo-pink">Business Hours</h4>
                <div className="flex items-start gap-3 mb-6">
                  <ClockIcon className="w-5 h-5 text-coral-sunset flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Monday - Friday:</span>
                      <span className="font-medium text-deep-navy">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Saturday:</span>
                      <span className="font-medium text-deep-navy">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-warm-gray">Sunday:</span>
                      <span className="font-medium text-deep-navy">Closed</span>
                    </div>
                  </div>
                </div>
                
                <h5 className="font-display text-lg font-semibold mb-4 text-sage-green">Our Services</h5>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Wedding Arrangements</li>
                  <li>• Event Centerpieces</li>
                  <li>• Custom Gift Baskets</li>
                  <li>• Funeral Arrangements</li>
                  <li>• Seasonal Specials</li>
                  <li>• Local Delivery</li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Quick Links */}
          <Row>
            <Col span={12}>
              <div className="border-t border-cream/20 pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
                    <Link href="/" className="text-warm-gray hover:text-flamingo-pink transition-colors">
                      Home
                    </Link>
                    <Link href="/services" className="text-warm-gray hover:text-flamingo-pink transition-colors">
                      Services
                    </Link>
                    <Link href="/contact" className="text-warm-gray hover:text-flamingo-pink transition-colors">
                      Contact
                    </Link>
                    <span className="text-warm-gray">|</span>
                    <span className="text-warm-gray">Privacy Policy</span>
                    <span className="text-warm-gray">Terms of Service</span>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-warm-gray text-sm">
                      &copy; 2024 Flamingo Florist. All rights reserved.
                    </p>
                    <p className="text-deep-navy text-sm font-medium">
                      Made with love for 30 years 🦩
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </footer>
  )
}