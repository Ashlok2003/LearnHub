'use client';

import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  CardContainer,
  CardBody,
  CardItem,
} from '@/components/ui/3d-card';

const pricingPlans = [
  {
    name: 'Free',
    price: 'Free',
    description: 'Forever free',
    users: '1 user',
    features: ['Plan features', 'Product support'],
    cta: 'Sign up',
    popular: false,
    buttonVariant: 'outline',
  },
  {
    name: 'Startup',
    price: '£39',
    description: 'All the basics for starting a new business',
    users: '2 users',
    features: ['Plan features', 'Product support'],
    cta: 'Sign up',
    popular: true,
    buttonVariant: 'default',
  },
  {
    name: 'Team',
    price: '£89',
    description: 'Everything you need for a growing business',
    users: '5 users',
    features: ['Plan features', 'Product support'],
    cta: 'Sign up',
    popular: false,
    buttonVariant: 'outline',
  },
  {
    name: 'Enterprise',
    price: '£149',
    description: 'Advanced features for scaling your business',
    users: '10 users',
    features: ['Plan features', 'Product support'],
    cta: 'Sign up',
    popular: false,
    buttonVariant: 'outline',
  },
];

export default function PricingSectionCards() {
  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="scroll-m-20 border-b pb-2 text-4xl md:text-6xl font-extrabold tracking-tight transition-colors first:mt-0">
          Pricing
        </h2>
        <p className="mt-1 text-muted-foreground">
          Whatever your status, our offers evolve according to your
          needs.
        </p>
      </div>
      {/* End Title */}
      {/* Switch */}
      <div className="flex justify-center items-center">
        <Label htmlFor="payment-schedule" className="me-3">
          Monthly
        </Label>
        <Switch id="payment-schedule" />
        <Label htmlFor="payment-schedule" className="relative ms-3">
          Annual
          <span className="absolute -top-10 start-auto -end-28">
            <span className="flex items-center">
              <svg
                className="w-14 h-8 -me-6"
                width={45}
                height={25}
                viewBox="0 0 45 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                  fill="currentColor"
                  className="text-muted-foreground"
                />
              </svg>
              <Badge className="mt-3 uppercase">Save up to 10%</Badge>
            </span>
          </span>
        </Label>
      </div>

      {/* Cards */}
      <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map(plan => (
          <CardContainer key={plan.name} className="w-full h-full">
            <CardBody className="relative group/card bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 flex flex-col justify-between h-full">
              <div>
                <CardItem
                  as="div"
                  translateZ={40}
                  className="text-center pb-4"
                >
                  {plan.popular && (
                    <Badge className="uppercase w-max self-center mb-3">
                      Most popular
                    </Badge>
                  )}
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold mt-2 text-neutral-900 dark:text-white">
                    {plan.price}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </CardItem>

                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {plan.users}
                    </span>
                  </li>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <CardItem translateZ={20} as="div" className="mt-6">
                <Button
                  className="w-full"
                  variant={plan.buttonVariant as any}
                >
                  {plan.cta}
                </Button>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
