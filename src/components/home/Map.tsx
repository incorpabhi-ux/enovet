'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Map = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent"
          >
            Find Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Located in the heart of Delhi, we're easily accessible and ready to meet with you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1234567890123!2d77.2756!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdd222d2ebfd%3A0x2bed67e36a63520f!2sLaxmi%20Nagar%2C%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Enovet Media Office Location - Laxmi Nagar, Delhi"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Office Address */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Office Address</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {CONTACT_INFO.address.line1}<br />
                    {CONTACT_INFO.address.line2}<br />
                    {CONTACT_INFO.address.city}, {CONTACT_INFO.address.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h4 className="font-semibold text-white mb-4">Contact Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-gray-300 text-sm">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-gray-300 text-sm">{CONTACT_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h4 className="font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Monday - Friday</span>
                  <span className="text-white text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Saturday</span>
                  <span className="text-white text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Sunday</span>
                  <span className="text-white text-sm">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl border border-secondary/20 p-6">
              <h4 className="font-semibold text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Call Now</span>
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Send Email</span>
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.postalCode}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-sm">Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Visit Our Office?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-white font-semibold mb-2">Strategic Location</h4>
                <p className="text-gray-300 text-sm">
                  Located near Laxmi Nagar Metro Station for easy accessibility
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-white font-semibold mb-2">Flexible Hours</h4>
                <p className="text-gray-300 text-sm">
                  Extended business hours to accommodate your schedule
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-white font-semibold mb-2">Direct Communication</h4>
                <p className="text-gray-300 text-sm">
                  Face-to-face meetings for better project understanding
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Map 