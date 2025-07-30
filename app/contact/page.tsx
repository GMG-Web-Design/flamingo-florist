'use client'
import React, { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Section, Container, Row, Col } from '@/app/layout-primitives'
import { Button } from '@/app/components/Button'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      {/* Hero Section */}
      <Section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-backgrounds/contact-hero-background.jpg"
            alt="Delicate flowers with raindrops background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream/85 via-dusty-rose/70 to-coral-sunset/75" />
        </div>

        <Container className="relative z-10">
          <Row>
            <Col span={12}>
              <div className="text-center">
                <div className="bg-white/75 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg mx-auto max-w-4xl">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-flamingo-pink/20 backdrop-blur-sm rounded-full border-2 border-flamingo-pink/30 animate-float">
                      <EnvelopeIcon className="w-10 h-10 text-flamingo-pink" />
                    </div>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-deep-navy mb-6">
                    Get In Touch
                  </h1>
                  <p className="text-xl md:text-2xl text-deep-navy max-w-3xl mx-auto mb-8 font-medium">
                    Call and tell us your story. Let&apos;s see what you&apos;re thinking. We want to make you feel surprised, 
                    special, and absolutely delighted.
                  </p>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-lg">
                    <p className="font-display text-2xl text-deep-navy font-semibold mb-2">
                      Ready to feel special?
                    </p>
                    <p className="text-flamingo-pink font-medium">
                      We&apos;re here to listen and bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Contact Information and Form */}
      <Section variant="light">
        <Container>
          <Row gap="lg">
            {/* Contact Information */}
            <Col span={12} lg={5}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl h-full">
                <h2 className="font-display text-3xl font-bold text-deep-navy mb-8">
                  How to Reach Us
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-flamingo-pink/10 p-3 rounded-2xl">
                      <PhoneIcon className="w-6 h-6 text-flamingo-pink" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-deep-navy mb-2">
                        Call Us
                      </h3>
                      <p className="text-2xl font-bold text-flamingo-pink mb-1">(865) 221-6010</p>
                      <p className="text-warm-gray">
                        Call and tell us your story. We love hearing about your vision and helping make it come true.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-coral-sunset/10 p-3 rounded-2xl">
                      <EnvelopeIcon className="w-6 h-6 text-coral-sunset" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-deep-navy mb-2">
                        Email Us
                      </h3>
                      <p className="text-xl font-semibold text-coral-sunset mb-1">flamingofloristtn@gmail.com</p>
                      <p className="text-warm-gray">
                        Send us details about your event, preferences, and any inspiration photos you have.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-sage-green/10 p-3 rounded-2xl">
                      <MapPinIcon className="w-6 h-6 text-sage-green" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-deep-navy mb-2">
                        Visit Our Shop
                      </h3>
                      <p className="text-xl font-semibold text-sage-green mb-1">8209 Chapman Hwy.</p>
                      <p className="text-warm-gray">Knoxville, TN 37920</p>
                      <p className="text-warm-gray mt-2">
                        Come see our work in person and let&apos;s create something beautiful together.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-soft-gold/10 p-3 rounded-2xl">
                      <ClockIcon className="w-6 h-6 text-soft-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-deep-navy mb-2">
                        Business Hours
                      </h3>
                      <div className="space-y-1 text-warm-gray">
                        <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> Closed</p>
                      </div>
                      <p className="text-warm-gray mt-2">
                        <em>Emergency and wedding consultations available by appointment</em>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-flamingo rounded-2xl p-6 mt-8 text-center">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="flex-1">
                      <ChatBubbleLeftRightIcon className="w-8 h-8 text-white mx-auto mb-3" />
                      <h4 className="font-display text-xl font-bold text-white mb-2">
                        Prefer to Talk?
                      </h4>
                      <p className="text-white/90 mb-4">
                        We&apos;d love to hear your story over the phone. Most questions are answered in just a few minutes!
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-flamingo-pink"
                      >
                        <PhoneIcon className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src="/img3.jpeg"
                          alt="Beautiful floral arrangement - let's create something special together"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col span={12} lg={7}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="font-display text-3xl font-bold text-deep-navy mb-2">
                  Tell Us Your Story
                </h2>
                <p className="text-warm-gray mb-8">
                  The more you tell us about your vision, the better we can help bring it to life. 
                  We&apos;re excited to create something special together.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Row gap="md">
                    <Col span={12} md={6}>
                      <label htmlFor="name" className="block text-deep-navy font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all"
                        placeholder="How should we address you?"
                      />
                    </Col>
                    <Col span={12} md={6}>
                      <label htmlFor="phone" className="block text-deep-navy font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all"
                        placeholder="So we can call you back"
                      />
                    </Col>
                  </Row>

                  <Row gap="md">
                    <Col span={12} md={6}>
                      <label htmlFor="email" className="block text-deep-navy font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all"
                        placeholder="For follow-up details"
                      />
                    </Col>
                    <Col span={12} md={6}>
                      <label htmlFor="eventType" className="block text-deep-navy font-medium mb-2">
                        What&apos;s the Occasion?
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all"
                      >
                        <option value="">Select an occasion</option>
                        <option value="wedding">Wedding</option>
                        <option value="event">Special Event</option>
                        <option value="gift">Gift or Surprise</option>
                        <option value="memorial">Memorial Service</option>
                        <option value="just-because">Just Because</option>
                        <option value="other">Something Else</option>
                      </select>
                    </Col>
                  </Row>

                  <div>
                    <label htmlFor="date" className="block text-deep-navy font-medium mb-2">
                      When Do You Need This? (Optional)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-deep-navy font-medium mb-2">
                      Tell Us Your Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-dusty-rose/30 rounded-xl focus:ring-2 focus:ring-flamingo-pink focus:border-transparent transition-all resize-none"
                      placeholder="Describe what you're thinking... colors you love, the feeling you want to create, any special requests, or just tell us about the person or event. We love hearing the stories behind our arrangements!"
                    ></textarea>
                  </div>

                  <div className="bg-sage-green/10 rounded-2xl p-6">
                    <h4 className="font-display text-lg font-semibold text-deep-navy mb-3">
                      💡 Help us create the perfect arrangement:
                    </h4>
                    <ul className="text-warm-gray space-y-2 text-sm">
                      <li>• What colors make you smile?</li>
                      <li>• Is this person traditional or adventurous?</li>
                      <li>• Any flowers they especially love (or are allergic to)?</li>
                      <li>• What&apos;s the story behind this gift?</li>
                      <li>• Budget range you&apos;re comfortable with?</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      Send My Story
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      className="flex-1"
                    >
                      <PhoneIcon className="w-5 h-5 mr-2" />
                      Call Instead
                    </Button>
                  </div>

                  <p className="text-center text-warm-gray text-sm">
                    We typically respond within 2-4 hours during business hours. 
                    For urgent requests, please call us directly.
                  </p>
                </form>
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
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-deep-navy italic mb-8 leading-relaxed max-w-4xl mx-auto">
                  &quot;I want people to visit so they can see our work. Not Teleflora or FTD pictures. 
                  I want them to know they are special.&quot;
                </blockquote>
                <div className="flex justify-center items-center gap-4">
                  <SparklesIcon className="w-6 h-6 text-flamingo-pink" />
                  <p className="text-deep-navy font-medium">Our Promise to You</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      {/* Emergency Contact */}
      <Section variant="dark" className="py-12">
        <Container>
          <Row>
            <Col span={12}>
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-cream mb-4">
                  Need Something Urgently?
                </h3>
                <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
                  We understand that some moments can&apos;t wait. For same-day arrangements, 
                  emergency deliveries, or last-minute requests, please call us directly.
                </p>
                <Button size="lg" className="bg-flamingo-pink hover:bg-coral-sunset">
                  <PhoneIcon className="w-6 h-6 mr-2" />
                                          Call (865) 221-6010 Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  )
}