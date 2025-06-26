'use client';

import { FeaturesSection } from './_components/Features';
import { Footer } from './_components/Footer';
import { HeroSection } from './_components/HeroSection';
import PricingSectionCards from './_components/Pricing';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSectionCards />
      <Footer />
    </>
  );
}
