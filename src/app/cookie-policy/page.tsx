'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, Database, Globe } from 'lucide-react';
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

const CookiePolicyPage = () => {
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
              <Cookie className="w-4 h-4 text-secondary" />
              <span className="text-white">Cookie & Tracking Technologies</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Learn how we use cookies and similar technologies to enhance your browsing experience.
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
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences, analyzing website traffic, and personalizing content.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This Cookie Policy explains how Enovet Media Private Limited uses cookies and similar technologies on our website.
              </p>
            </motion.div>

            {/* Types of Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Form submissions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Page views and time spent</li>
                    <li>• Traffic sources</li>
                    <li>• User behavior patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Form data retention</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Ad targeting</li>
                    <li>• Campaign effectiveness</li>
                    <li>• Remarketing</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We may use third-party services that place cookies on your device. These services include:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Google Analytics</h3>
                  <p className="text-gray-300 text-sm">
                    Used to analyze website traffic and user behavior. Google's privacy policy applies to data collected by Google Analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Google Ads</h3>
                  <p className="text-gray-300 text-sm">
                    Used for advertising purposes and to measure the effectiveness of our marketing campaigns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Social Media Platforms</h3>
                  <p className="text-gray-300 text-sm">
                    Facebook, LinkedIn, and other social media platforms may place cookies for advertising and analytics purposes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cookie Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                  <p className="text-gray-300 mb-2">
                    You can control and manage cookies through your browser settings:
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li>• Firefox: Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                    <li>• Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li>• Edge: Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                  <p className="text-gray-300">
                    When you first visit our website, you'll see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Opt-Out Options</h3>
                  <p className="text-gray-300">
                    You can opt out of certain third-party cookies through their respective opt-out mechanisms:
                  </p>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Google Analytics Opt-out</a></li>
                    <li>• Google Ads: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">Google Ads Settings</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Information Collected by Cookies</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                Cookies may collect the following types of information:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• IP address and device information</li>
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website</li>
                <li>• User preferences and settings</li>
                <li>• Form data (with consent)</li>
              </ul>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Cookie Retention Periods</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Session Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are deleted when you close your browser and are used for temporary session management.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Persistent Cookies</h3>
                  <p className="text-gray-300">
                    These cookies remain on your device for a specified period (usually 1-2 years) unless manually deleted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Third-Party Cookies</h3>
                  <p className="text-gray-300">
                    Retention periods for third-party cookies are determined by the respective service providers and may vary.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Security and Data Protection</h2>
              </div>
              
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect the information collected through cookies:
              </p>
              
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Secure transmission of data</li>
                <li>• Regular security assessments</li>
                <li>• Compliance with data protection laws</li>
                <li>• Limited access to collected data</li>
                <li>• Regular cookie audits and updates</li>
              </ul>
            </motion.div>

            {/* Updates to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Updates to This Policy</h2>
              
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl border border-secondary/20 p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              
              <p className="text-gray-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicyPage; 