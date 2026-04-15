'use client';

import React from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { PLANS } from '@/lib/plans';

export default function PricingPage() {
  const plansArray = [
    { id: 'foundation', ...PLANS.foundation },
    { id: 'growth', ...PLANS.growth },
    { id: 'enterprise', ...PLANS.enterprise },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Predictable Pricing for Growing Businesses" 
        description="Choose the accounting and advisory package that fits your stage of growth. No hidden fees or surprises."
      />
      
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plansArray.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative flex flex-col h-full ${plan.popular ? 'border-primary shadow-lg scale-105 z-10 overflow-visible' : 'border-slate-200'} overflow-visible`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">{plan.description}</CardDescription>
                  <div className="mt-6 flex flex-col items-center">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight">${plan.price.toLocaleString()}</span>
                    </div>
                    <span className="text-slate-500 text-sm mt-1">per year</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="text-sm font-medium mb-4 text-slate-900">What's included:</div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex item-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-8 pb-8">
                  <Link href={`/checkout?plan=${plan.id}`} className={cn(buttonVariants({ variant: plan.popular ? "default" : "outline", size: "lg" }), "w-full")}>
                    Choose {plan.name}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a custom plan?</h3>
            <p className="text-slate-600 mb-8">
              We understand that every business is unique. Contact our team to build a tailored package with exactly the services you require.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
