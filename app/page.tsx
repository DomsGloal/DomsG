'use client';

import { Navigation } from '@/components/layout/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import {ServicesSection}  from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { IndustriesSection } from '@/components/sections/industriescards';
// import {AgriculturePage} from '@/Pages/AgriculturePage';
// import FindYourSolution from '@/components/sections/FindYourSolution';



export default function HomePage() {

  return (
    <main className="min-h-screen bg-background">
    
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      {/* <FindYourSolution /> */}
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
      {/* <AgriculturePage /> */}

      <Footer />
    </main>
  );
}