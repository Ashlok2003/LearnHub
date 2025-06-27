'use client';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarButton,
  NavbarLogo,
  Navbar as NavbarWrapper,
} from '@/components/ui/resizable-navbar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useScrollTrigger } from '@/hooks/use-scroll-trigger';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import {
  Book,
  Globe,
  Home,
  LayoutDashboard,
  User,
} from 'lucide-react';
import { useState } from 'react';
import { UserDropdown } from './UserDropdown';

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: Home,
  },
  {
    name: 'Courses',
    link: '/courses',
    icon: Book,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: LayoutDashboard,
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const isScrolled = useScrollTrigger();
  return (
    <div className="w-full sticky top-0 z-50">
      <NavbarWrapper>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="font-bold" />
          <div
            className={cn(
              'flex items-center',
              !session ? 'gap-3' : 'gap-1'
            )}
          >
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                email={session.user.email}
                name={
                  session?.user.name && session.user.name.length > 0
                    ? session.user.name
                    : session?.user.email.split('@')[0]
                }
                image={
                  session?.user.image ??
                  `https://avatar.vercel.sh/${session?.user.email}`
                }
              />
            ) : (
              <>
                <NavbarButton
                  href="/login"
                  variant="secondary"
                  className={cn(
                    'font-bold outline',
                    isScrolled ? 'rounded-full' : 'rounded-3xl'
                  )}
                >
                  {isScrolled ? <User className="size-4" /> : 'Login'}
                </NavbarButton>
                <NavbarButton
                  href="/login"
                  variant="primary"
                  className={cn(
                    'font-bold',
                    isScrolled ? 'rounded-full' : 'rounded-3xl'
                  )}
                >
                  {isScrolled ? (
                    <Globe className="size-4" />
                  ) : (
                    'Get Started'
                  )}
                </NavbarButton>
              </>
            )}
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <NavbarLogo />
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="flex flex-col space-y-2 px-4 py-6"
          >
            <div className="grid grid-cols-3 items-center justify-around w-full">
              {navItems.map((item, idx) => (
                <NavbarButton
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium  hover:text-primary transition-colors"
                  variant="secondary"
                >
                  {item.name}
                </NavbarButton>
              ))}
            </div>

            <div className="flex flex-row items-center justify-between gap-4 w-full">
              <ThemeToggle />

              {isPending ? null : session ? (
                <UserDropdown
                  email={session.user.email}
                  name={
                    session?.user.name && session.user.name.length > 0
                      ? session.user.name.charAt(0).toUpperCase()
                      : session?.user.email.charAt(0).toUpperCase()
                  }
                  image={
                    session?.user.image ??
                    `https://avatar.vercel.sh/${session?.user.email}`
                  }
                />
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <NavbarButton
                    href="/login"
                    variant="secondary"
                    className="outline"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    href="/login"
                    variant="primary"
                    className="outline"
                  >
                    Get Started
                  </NavbarButton>
                </div>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarWrapper>
    </div>
  );
}
