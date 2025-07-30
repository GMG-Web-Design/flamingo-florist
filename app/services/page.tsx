import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { SparklesIcon, GiftIcon, StarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Section, Container, Row, Col } from '@/app/layout-primitives'
import { Button } from '@/app/components/Button'

export const metadata: Metadata = {
  title: 'Services - Flamingo Florist',
  description: 'Wedding flowers, special events, custom arrangements, and memorial services. 30 years of creating beautiful floral designs for every occasion.',
  keywords: ['wedding flowers', 'event flowers', 'custom arrangements', 'memorial flowers', 'floral design services'],
}

export default function ServicesPage() {
  const services = [
    {
      icon: SparklesIcon,
      title: 'Wedding Flowers',
      description: 'When brides and families walk in for the first time and see the vision we created with their thoughts, their eyes light up with smiles and glow.',
      features: [
        'Bridal bouquets & boutonnieres',
        'Ceremony decorations',
        'Reception centerpieces',
        'Floral arches & backdrops',
        'Aisle petals & arrangements',
        'Custom color coordination'
      ],
      image: '/images/wedding/elegant-rustic-wedding-bouquet-table.jpg',
      starting: 'Starting at $85'
    },
    {
      icon: SparklesIcon,
      title: 'Special Events',
      description: 'From parties to corporate events, we bring your vision to life with stunning arrangements that make every occasion memorable.',
      features: [
        'Corporate event flowers',
        'Birthday celebrations',
        'Anniversary arrangements',
        'Holiday decorations',
        'Grand opening displays',
        'Custom themed designs'
      ],
      image: '/images/arrangements/luxury-floral-centerpiece-soft-tones.jpg',
      starting: 'Starting at $65'
    },
    {
      icon: GiftIcon,
      title: 'Gift Baskets & Surprises',
      description: 'Gift baskets filled with thoughtful surprises, from get-well packages to anniversary specials that make them say "He did remember..."',
      features: [
        'Get-well gift baskets',
        'Gourmet food baskets',
        'Chocolate lover collections',
        'BBQ & grilling gifts',
        'Spa & relaxation sets',
        'Custom surprise packages'
      ],
      image: '/images/arrangements/blue-truck-flower-arrangement.jpg',
      starting: 'Starting at $45'
    },
    {
      icon: SparklesIcon,
      title: 'Memorial Services',
      description: 'Honoring lives with dignity and beauty, creating meaningful tributes that celebrate memories and bring comfort during difficult times.',
      features: [
        'Funeral arrangements',
        'Memorial wreaths',
        'Sympathy bouquets',
        'Casket sprays',
        'Standing arrangements',
        'Tribute gardens'
      ],
      image: '/images/memorial/patriotic-funeral-tribute-display.jpg',
      starting: 'Starting at $55'
    }
  ]

  const specialties = [
    'Silk flower arrangements',
    'Seasonal specialty items',
    'Local shop partnerships',
    'Custom consultation',
    'Same-day delivery',
    'Weekly fresh arrangements'
  ]

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-backgrounds/services-hero-background.jpg"
            alt="Wedding ceremony floral arrangements background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-dusty-rose/65 to-coral-sunset/75" />
        </div>

        <Container className="relative z-10">
          <Row>
            <Col span={12}>
              <div className="text-center">
                <div className="bg-white/75 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg mx-auto max-w-4xl">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-flamingo-pink/20 backdrop-blur-sm rounded-full border-2 border-flamingo-pink/30 animate-float">
                      <SparklesIcon className="w-10 h-10 text-flamingo-pink" />
                    </div>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-deep-navy mb-6">
                    Our Services
                  </h1>
                  <p className="text-xl md:text-2xl text-deep-navy max-w-3xl mx-auto mb-8 font-medium">
                    Beautiful flowers, all sizes, shapes, and colors. From traditional to whimsical, 
                    fun to serious. Everything is custom made to fit your needs.
                  </p>
                  <div className="flex justify-center items-center gap-4 mb-8">
                    <div className="flex text-soft-gold">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <span className="text-deep-navy font-medium">30 Years of Excellence</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section variant="light">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  What We Create
                </h2>
                <p className="text-xl text-warm-gray max-w-2xl mx-auto">
                  We are not cookie-cutter arrangements. We take pride and listen to our customers. 
                  We add special touches to everything we touch and make.
                </p>
              </div>
            </Col>
          </Row>

          {services.map((service, index) => (
            <div key={service.title} className="mb-20 last:mb-0">
              <Row gap="lg">
                <Col span={12} lg={6} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="bg-flamingo-pink text-white px-4 py-2 rounded-full text-sm font-medium">
                        {service.starting}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col span={12} lg={6} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <service.icon className="w-12 h-12 text-flamingo-pink mb-4" />
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-warm-gray leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-display text-xl font-semibold text-deep-navy mb-4">
                        What&apos;s Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-flamingo-pink rounded-full flex-shrink-0"></div>
                            <span className="text-warm-gray">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button>
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Get a Quote
                      </Button>
                      <Button variant="outline">
                        <EnvelopeIcon className="w-5 h-5 mr-2" />
                        Ask Questions
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </Section>

      {/* Specialties Section */}
      <Section variant="dark">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                  Our Specialties
                </h2>
                <p className="text-xl text-cream/80 max-w-2xl mx-auto mb-12">
                  We have local shops with local items and it's all custom made to fit the customer&apos;s needs. 
                  Every arrangement is unique, just like you.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {specialties.map((specialty, index) => (
                    <div key={index} className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <SparklesIcon className="w-8 h-8 text-flamingo-pink mx-auto mb-3" />
                      <p className="text-cream font-medium">{specialty}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-flamingo rounded-3xl p-8 text-center">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                        &quot;We don&apos;t create cookie-cutter arrangements. We create works of art.&quot;
                      </h3>
                      <p className="text-white/90 mb-6 ">
                        Everybody has a vision and we help guide to achieving whatever they need. 
                        We guide and give ideas but never take away from what they want.
                      </p>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-flamingo-pink">
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Start Your Vision
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/img2.jpeg"
                          alt="Beautiful floral arrangement showcasing our artistry"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="light">
        <Container>
          <Row>
            <Col span={12} lg={8} className="mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Common Questions
                </h2>
                <p className="text-xl text-warm-gray">
                  Here are answers to the questions our customers ask most often.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-deep-navy mb-4">
                    How long will my flowers last?
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    Fresh cut flowers typically last 5-7 days with proper care. We provide care instructions 
                    with every arrangement to help you enjoy your flowers as long as possible.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-deep-navy mb-4">
                    Can you leave flowers outside if I&apos;m not home?
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    We can arrange secure delivery options and will call to coordinate the best delivery time. 
                    We want to ensure your flowers are received in perfect condition.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-deep-navy mb-4">
                    Do you guarantee delivery before services?
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    Absolutely. We understand the importance of timing for special events and memorial services. 
                    We coordinate closely with venues and families to ensure timely delivery.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-display text-xl font-semibold text-deep-navy mb-4">
                    What if the recipient has been discharged before delivery?
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    We always verify delivery addresses and can redirect arrangements if needed. 
                    We&apos;ll work with you to ensure your thoughtful gift reaches the intended recipient.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-sunset">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center">
                <SparklesIcon className="w-16 h-16 text-deep-navy mx-auto mb-6" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Ready to Create Something Beautiful?
                </h2>
                <p className="text-xl text-deep-navy/80 max-w-2xl mx-auto mb-10">
                  Call and tell us your story. Let&apos;s see what you&apos;re thinking. We want to make you feel surprised, 
                  special, and absolutely delighted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    Call (865) 221-6010
                  </Button>
                  <Button variant="outline" size="lg">
                    <EnvelopeIcon className="w-6 h-6 mr-2" />
                    Send a Message
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  )
}