import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Services from '@/components/home/Services'
import Portfolio from '@/components/home/Portfolio'
import Testimonials from '@/components/home/Testimonials'
import Clients from '@/components/home/Clients'
import ChatWidget from '@/components/ChatWidget'
import Brands from '@/components/home/Brands'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Brands />
      <ChatWidget />
      {/* <Footer /> */}
    </main>
  )
} 