import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import quickPayyDashboard from "@/app/assets/quickpayy_dashboard.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex items-center md:justify-center text-center text-balance flex-col gap-8 px-4 mt-48 md:mt-56 relative -z-10">
        <div className="offer  max-w-max rounded-full border-2 border-neutral-400/10 p-2 md:px-4 backdrop-blur">
          Enjoy 50% discount on first purchase!
        </div>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight">
          Price Smarter, Sell bigger!
        </h1>
        <p className="md:text-lg lg:text-2xl max-w-5xl -mt-2">
          <span className="hidden md:inline-block">
            Optimize your product pricing across countries to maximize sales.
          </span>
          Capture 85% of the untapped market with location-based pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
        <p>14-day free trial</p>
        <div className="img-container relative top-10 shadow-2xl w-[971px] h-[605px] hidden md:block">
          <Image
            src={quickPayyDashboard}
            alt=""
            className="absolute rounded-2xl top-0 left-0 object-cover z-10"
          ></Image>
          <div className="absolute bg-[linear-gradient(#d2dfff,hsl(var(--background))_60%)] w-[108%] h-[120%] -left-[2.5rem] -top-10 rounded-3xl "></div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link className="md:max-xl:hidden" href="https://clerk.com">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className=" px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "#" },
                { label: "Discount API", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
