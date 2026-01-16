import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import PopularCategories from '@/components/home/PopularCategories';
import PopularProducts from '@/components/home/PopularProducts';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCategories />
      <PopularProducts />
      <HowItWorks />
      <Features />
      <Testimonials />
      <NewsletterCTA />
    </div>
  );
}
