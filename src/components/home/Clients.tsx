'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const clients = [
  {
    id: 1,
    name: 'Client 1',
    logo: '/images/clients/client1.png',
  },
  {
    id: 2,
    name: 'Client 2',
    logo: '/images/clients/client2.png',
  },
  {
    id: 3,
    name: 'Client 3',
    logo: '/images/clients/client3.png',
  },
  {
    id: 4,
    name: 'Client 4',
    logo: '/images/clients/client4.png',
  },
  {
    id: 5,
    name: 'Client 5',
    logo: '/images/clients/client5.png',
  },
  {
    id: 6,
    name: 'Client 6',
    logo: '/images/clients/client6.png',
  },
]

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Trusted by Leading Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            We work with companies of all sizes across various industries
          </motion.p>
        </div>

        <div
          ref={ref}
          className="relative overflow-hidden"
        >
          <div className="flex space-x-12 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 h-20 w-40 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
} 