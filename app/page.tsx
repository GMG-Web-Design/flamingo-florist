import React from 'react'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, SparklesIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Section, Container, Row, Col } from '@/app/layout-primitives'
import { Button } from '@/app/components/Button'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-backgrounds/homepage-hero-background.jpg"
            alt="Beautiful floral arrangement background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-dusty-rose/60 to-coral-sunset/70" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
            <SparklesIcon className="w-8 h-8 text-coral-sunset" />
          </div>
          <div className="absolute bottom-32 left-40 animate-float" style={{ animationDelay: '2s' }}>
            <SparklesIcon className="w-10 h-10 text-dusty-rose" />
          </div>
        </div>
        
        <Container className="text-center relative z-20">
          <Row>
            <Col span={12}>
              <div className="animate-fade-in">
                <div className="bg-white/75 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg mx-auto max-w-4xl">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-flamingo-pink/20 backdrop-blur-sm rounded-full border-2 border-flamingo-pink/30">
                      <SparklesIcon className="w-10 h-10 text-flamingo-pink" />
                    </div>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-deep-navy mb-6 leading-tight">
                    Flamingo Florist
                  </h1>
                  <p className="text-2xl md:text-3xl font-display text-flamingo-pink mb-8 italic">
                    30 Years of Making Moments Special
                  </p>
                  <p className="text-lg md:text-xl text-deep-navy mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                    We don&apos;t create cookie-cutter arrangements. We craft works of art that make people smile, 
                    cry happy tears, and feel truly special. Every flower tells a story.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="animate-slide-up">
                      <PhoneIcon className="w-6 h-6 mr-2" />
                      Tell Us Your Story
                    </Button>
                    <Button variant="outline" size="lg" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      <SparklesIcon className="w-6 h-6 mr-2" />
                      View Our Work
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* About Section */}
      <Section variant="light">
        <Container>
          <Row>
            <Col span={12} md={6}>
              <div className="animate-slide-up">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                  We come from a long line of decorators, hair stylists, and gardeners. I love my garden, 
                  love to share my flowers. But it&apos;s the best when you deliver a flower bouquet and see 
                  the smiles and tears – flowers just make you feel good.
                </p>
                <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                  Everyone is special. We are not cookie-cutter arrangements. We take pride and listen to 
                  our customers. We add special touches to everything we touch and make. We are not an 
                  assembly line. We create works of art.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex text-soft-gold">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <span className="text-warm-gray font-medium">30 Years of Excellence</span>
                </div>
                <Button variant="secondary">
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </Col>
            <Col span={12} md={6}>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative h-96 md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img1.jpeg"
                    alt="Beautiful floral arrangement - real client work by Flamingo Florist"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-display text-xl italic">
                      &quot;Every arrangement is a work of art&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Services Section */}
      <Section variant="dark">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                  Our Services
                </h2>
                <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                  Beautiful flowers, all sizes, shapes, and colors. From traditional to whimsical, 
                  fun to serious. We create exactly what you envision.
                </p>
              </div>
            </Col>
          </Row>
          <Row gap="lg">
            <Col span={12} md={6} lg={3}>
              <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-8 text-center h-full">
                <SparklesIcon className="w-12 h-12 text-flamingo-pink mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-cream mb-4">Weddings</h3>
                <p className="text-cream/80 mb-6">
                  When brides and families walk in for the first time and see the vision we created 
                  with their thoughts, their eyes light up with smiles and glow.
                </p>
              </div>
            </Col>
            <Col span={12} md={6} lg={3}>
              <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-8 text-center h-full">
                <SparklesIcon className="w-12 h-12 text-coral-sunset mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-cream mb-4">Events</h3>
                <p className="text-cream/80 mb-6">
                  From parties to corporate events, we bring your vision to life with stunning 
                  arrangements that make every occasion memorable.
                </p>
              </div>
            </Col>
            <Col span={12} md={6} lg={3}>
              <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-8 text-center h-full">
                <SparklesIcon className="w-12 h-12 text-dusty-rose mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-cream mb-4">Special Gifts</h3>
                <p className="text-cream/80 mb-6">
                  Gift baskets filled with thoughtful surprises, from get-well packages to 
                  anniversary specials that make them say &quot;He did remember...&quot;
                </p>
              </div>
            </Col>
            <Col span={12} md={6} lg={3}>
              <div className="bg-cream/10 backdrop-blur-sm rounded-3xl p-8 text-center h-full">
                <HeartIcon className="w-12 h-12 text-sage-green mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-cream mb-4">Memorials</h3>
                <p className="text-cream/80 mb-6">
                  Honoring lives with dignity and beauty, creating meaningful tributes that 
                  celebrate memories and bring comfort during difficult times.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Memorial Section */}
      <Section variant="light">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Honoring Lives with Dignity
                </h2>
                <p className="text-xl text-warm-gray max-w-3xl mx-auto mb-8">
                  We understand that memorial arrangements are deeply personal. Each tribute we create 
                  honors a life lived and brings comfort to those who remember. From patriotic displays 
                  to heartfelt family tributes, we listen to your stories and create meaningful memorials.
                </p>
              </div>
            </Col>
          </Row>
          <Row gap="lg">
            <Col span={12} md={6}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/memorial/patriotic-funeral-tribute-display.jpg"
                  alt="Patriotic funeral tribute display with American flags - real client work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">Patriotic Tributes</p>
                  <p className="text-white/80 text-sm mt-2">Honoring service and sacrifice</p>
                </div>
              </div>
            </Col>
            <Col span={12} md={6}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/memorial/purple-heart-shaped-funeral-floral.jpg"
                  alt="Purple heart-shaped funeral floral arrangement - real client work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">Family Tributes</p>
                  <p className="text-white/80 text-sm mt-2">Celebrating beloved relationships</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className="text-center mt-12">
                <p className="text-warm-gray font-display text-lg italic mb-6">
                  &quot;We create meaningful tributes that celebrate memories and bring comfort during difficult times&quot;
                </p>
                <Button variant="secondary" size="lg">
                  Learn About Memorial Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Testimonial Section */}
      <Section className="bg-gradient-sunset">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center">
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-deep-navy italic mb-8 leading-relaxed">
                  &quot;On holidays in the past, when you walk up to the door and say, &apos;Well, who would 
                  send me flowers? Why did I get flowers? It&apos;s not my birthday.&apos; And then they read the 
                  card message and start crying. It&apos;s when they don&apos;t expect the gift and it just warms their heart.&quot;
                </blockquote>
                <div className="flex justify-center items-center gap-4">
                  <SparklesIcon className="w-6 h-6 text-flamingo-pink" />
                  <p className="text-deep-navy font-medium">A Flamingo Florist Moment</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Gallery Preview Section */}
      <Section variant="light">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-navy mb-6">
                  Our Work Speaks for Itself
                </h2>
                <p className="text-xl text-warm-gray max-w-2xl mx-auto mb-8">
                  Not Teleflora or FTD pictures – these are our real creations, our actual work. 
                  We want you to see what we can create for you.
                </p>
              </div>
            </Col>
          </Row>
          <Row gap="md">
            <Col span={12} md={6} lg={4}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/wedding/elegant-rustic-wedding-bouquet-table.jpg"
                  alt="Elegant rustic wedding bouquet on table - real client work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">Wedding Dreams</p>
                </div>
              </div>
            </Col>
            <Col span={12} md={6} lg={4}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/arrangements/luxury-floral-centerpiece-soft-tones.jpg"
                  alt="Luxury floral centerpiece with soft tones - real client work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">Event Magic</p>
                </div>
              </div>
            </Col>
            <Col span={12} md={6} lg={4}>
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/arrangements/blue-truck-flower-arrangement.jpg"
                  alt="Unique blue truck flower arrangement - real client work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">Special Surprises</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  View Full Gallery
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section variant="dark">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center">
                <SparklesIcon className="w-16 h-16 text-flamingo-pink mx-auto mb-6 animate-float" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                  Ready to Feel Special?
                </h2>
                <p className="text-xl text-cream/80 max-w-2xl mx-auto mb-10">
                  Call and tell us your story. Let&apos;s see what you&apos;re thinking. We want to make you feel surprised, 
                  special, and absolutely delighted.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-flamingo-pink hover:bg-coral-sunset">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    Call Us Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-deep-navy">
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