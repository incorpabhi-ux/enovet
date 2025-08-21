'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Handshake, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

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

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6"
            >
              <FileText className="w-4 h-4 text-secondary" />
              <span className="text-white">Legal Terms & Conditions</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                Terms of Service
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our services or website.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="text-sm text-gray-400"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the website and services of Enovet Media Private Limited ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Our Services</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                Enovet Media Private Limited provides digital marketing and web development services including but not limited to:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Web Development and Design</li>
                <li>• Search Engine Optimization (SEO)</li>
                <li>• Social Media Marketing</li>
                <li>• Pay-Per-Click (PPC) Advertising</li>
                <li>• Content Marketing</li>
                <li>• Branding and Design</li>
                <li>• Video Editing and Production</li>
                <li>• Digital Strategy Consulting</li>
              </ul>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
              </div>
              
              <p className="text-gray-300 mb-4">When using our services, you agree to:</p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Provide accurate and complete information</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Not use our services for any illegal or unauthorized purpose</li>
                <li>• Not interfere with or disrupt our services</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Respect intellectual property rights</li>
                <li>• Pay all fees and charges in a timely manner</li>
              </ul>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Pricing and Payment</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• All prices are quoted in Indian Rupees (INR) unless otherwise specified</li>
                    <li>• Payment terms will be specified in individual project agreements</li>
                    <li>• We accept payment through bank transfers, UPI, and other digital payment methods</li>
                    <li>• Late payments may result in suspension of services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Refunds and Cancellations</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Refund policies will be specified in individual service agreements</li>
                    <li>• Cancellation fees may apply based on project stage</li>
                    <li>• No refunds for completed work or delivered services</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Our Rights</h3>
                  <p className="text-gray-300">
                    All content on this website, including text, graphics, logos, and software, is the property of Enovet Media Private Limited and is protected by Indian copyright laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Client Deliverables</h3>
                  <p className="text-gray-300">
                    Upon full payment, clients receive ownership of final deliverables as specified in individual project agreements. We retain the right to showcase completed work in our portfolio.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Enovet Media Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Loss of profits or business opportunities</li>
                <li>• Data loss or corruption</li>
                <li>• Service interruptions</li>
                <li>• Third-party actions or content</li>
                <li>• Any damages arising from the use of our services</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </motion.div>

            {/* Disclaimers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Disclaimers</h2>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Uninterrupted or error-free service</li>
                  <li>• Specific results from marketing campaigns</li>
                  <li>• Compatibility with all devices or browsers</li>
                  <li>• Third-party service availability</li>
                </ul>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              
              <p className="text-gray-300 mb-4">
                Either party may terminate this agreement with written notice. Upon termination:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• All outstanding payments become immediately due</li>
                <li>• Access to services may be suspended</li>
                <li>• Data retention policies will apply</li>
                <li>• Surviving provisions remain in effect</li>
              </ul>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Governing Law</h2>
              </div>
              
              <p className="text-gray-300">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
              
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl border border-secondary/20 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-300">
                <p><strong>Enovet Media Private Limited</strong></p>
                <p>{CONTACT_INFO.address.line1}</p>
                <p>{CONTACT_INFO.address.line2}</p>
                <p>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.postalCode}</p>
                <p>{CONTACT_INFO.address.country}</p>
                <p>Email: {CONTACT_INFO.email}</p>
                <p>Phone: {CONTACT_INFO.phone}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage; 