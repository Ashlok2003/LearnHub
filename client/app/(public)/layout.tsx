import { ReactNode } from 'react';
import { Navbar } from './_components/Navbar';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default function LayoutPublic({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
        <ShootingStars />
        <StarsBackground />
      </main>
    </div>
  );
}
