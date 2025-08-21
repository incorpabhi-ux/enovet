'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';
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

const PrivacyPolicyPage = () => {
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
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-white">Privacy & Data Protection</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Enovet Media Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This policy complies with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, as well as other applicable Indian laws and regulations.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• Name, email address, and phone number</li>
                    <li>• Company name and job title</li>
                    <li>• Project requirements and budget information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Information</h3>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referring website or source</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookies and Tracking</h3>
                  <p className="text-gray-300">
                    We use cookies and similar tracking technologies to enhance your experience on our website. For detailed information about our use of cookies, please refer to our Cookie Policy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">We use the information we collect for the following purposes:</p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• To provide and maintain our digital marketing services</li>
                  <li>• To communicate with you about your projects and inquiries</li>
                  <li>• To send you marketing materials and updates (with your consent)</li>
                  <li>• To improve our website and services</li>
                  <li>• To comply with legal obligations</li>
                  <li>• To protect our rights and prevent fraud</li>
                  <li>• To analyze website usage and trends</li>
                </ul>
              </div>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements or court orders</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• With trusted service providers who assist us in operating our business</li>
                <li>• In connection with a business transfer or merger</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Encryption of sensitive data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication procedures</li>
                <li>• Employee training on data protection</li>
                <li>• Secure hosting and infrastructure</li>
              </ul>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              
              <p className="text-gray-300 mb-4">
                Under applicable Indian laws, you have the following rights regarding your personal information:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your personal information</li>
                <li>• Right to withdraw consent</li>
                <li>• Right to lodge a complaint with the appropriate authority</li>
              </ul>
              
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            {/* International Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
              </div>
              
              <p className="text-gray-300">
                Your personal information may be transferred to and processed in countries other than India. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect your information.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl border border-secondary/20 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicyPage; 