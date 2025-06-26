// components/Footer.tsx
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white mt-4">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 border-t border-neutral-300 dark:border-neutral-700">
        <div className="mb-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
            Let&apos;s Learn Together
          </p>
          <a
            href="/contact"
            className="text-5xl md:text-6xl font-bold inline-flex items-center gap-2 hover:underline"
          >
            Start a project
            <ArrowUpRight className="w-7 h-7" />
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-neutral-300 dark:border-neutral-700 pt-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="border rounded-full px-2 py-1 text-xs font-semibold border-black dark:border-white">
                Certified
              </div>
              <span className="text-sm">Learning Platform</span>
            </div>

            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 77670-12860
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                chaudharyashlok@gmail.com
              </p>
            </div>

            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="#"
                className="flex items-center gap-2 hover:underline"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:underline"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
            </div>
          </div>

          <div className="hidden md:block" />

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Newsletter</h4>
            <div className="flex items-center border-b border-neutral-400 dark:border-neutral-600 py-1">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-sm placeholder-neutral-500 focus:outline-none"
              />
              <Button className="ml-2 text-sm font-bold rounded-3xl">
                Subscribe
              </Button>
            </div>
            <div className="text-sm text-right">
              <a href="#" className="hover:underline">
                Top ↑
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 pt-6 gap-2">
          <p>© 2025 LearnHub</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
          <p>Made by Ashlok Chaudhary</p>
        </div>
      </div>
    </footer>
  );
}
