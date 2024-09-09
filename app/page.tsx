import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Feature';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonial';
import BlogSection from '@/components/BlogSection';
import Demo from '@/components/Demo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
