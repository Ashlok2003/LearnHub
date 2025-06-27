'use client';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Cover } from '@/components/ui/cover';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import DashboardImage from '@/public/dashboard.png';
import { Book, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative h-full rounded-2xl border md:rounded-3xl">
            <GlowingEffect
              blur={0}
              borderWidth={1}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Badge
              variant="outline"
              className="font-semibold rounded-2xl md:rounded-3xl p-2"
            >
              🎉 The Future of Online Education
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-5xl line-clamp-2 leading-snug">
            Elevate your Learning Experience with{' '}
            <Cover>LearnHub</Cover>
          </h1>
          <p className="max-w-[750] text-muted-foreground font-semibold italic text-xs md:text-sm lg:text-lg">
            Discover a new way to learn with our modern, interactive
            learning management system. Access high-quality courses
            anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/courses"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'default',
                  className: 'rounded-3xl font-bold',
                })
              )}
            >
              Explore Courses <Book className="size-4" />
            </Link>
            <Link
              href="/courses"
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'outline',
                  className: 'rounded-3xl font-bold',
                })
              )}
            >
              Sign in <User className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 -mt-11">
        <GlowingEffect
          blur={0}
          borderWidth={5}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <Image
          src={DashboardImage}
          alt="Dashboard Preview"
          className="w-full h-auto rounded-2xl md:rounded-3xl"
        />
      </section>
    </>
  );
}
