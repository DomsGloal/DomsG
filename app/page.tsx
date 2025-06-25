'use client';

import { Navigation } from '@/components/layout/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { CustomCursor } from '@/components/ui/custom-cursor';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}