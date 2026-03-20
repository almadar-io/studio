import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import { HeroSection, PricingGrid, ContentSection } from "@almadar/ui/marketing";

const PLANS = [
  {
    name: translate({ id: "pricing.free.name", message: "Free" }),
    price: translate({ id: "pricing.free.price", message: "Coming Soon" }),
    description: translate({ id: "pricing.free.desc", message: "For personal projects and learning." }),
    features: [
      translate({ id: "pricing.free.f1", message: "AI agent access" }),
      translate({ id: "pricing.free.f2", message: "Live preview" }),
      translate({ id: "pricing.free.f3", message: "Community support" }),
    ],
    action: {
      label: translate({ id: "pricing.free.cta", message: "Join Waitlist" }),
      href: "mailto:hello@almadar.io",
    },
    highlighted: false,
  },
  {
    name: translate({ id: "pricing.pro.name", message: "Pro" }),
    price: translate({ id: "pricing.pro.price", message: "Coming Soon" }),
    description: translate({ id: "pricing.pro.desc", message: "For professionals and small teams." }),
    features: [
      translate({ id: "pricing.pro.f1", message: "Priority AI generation" }),
      translate({ id: "pricing.pro.f2", message: "One-click deploy" }),
      translate({ id: "pricing.pro.f3", message: "Custom domains" }),
      translate({ id: "pricing.pro.f4", message: "Email support" }),
    ],
    action: {
      label: translate({ id: "pricing.pro.cta", message: "Join Waitlist" }),
      href: "mailto:hello@almadar.io",
    },
    highlighted: true,
  },
  {
    name: translate({ id: "pricing.enterprise.name", message: "Enterprise" }),
    price: translate({ id: "pricing.enterprise.price", message: "Coming Soon" }),
    description: translate({ id: "pricing.enterprise.desc", message: "For organizations with specific requirements." }),
    features: [
      translate({ id: "pricing.enterprise.f1", message: "Dedicated infrastructure" }),
      translate({ id: "pricing.enterprise.f2", message: "Custom AI models" }),
      translate({ id: "pricing.enterprise.f3", message: "SLA guarantee" }),
      translate({ id: "pricing.enterprise.f4", message: "On-premise option" }),
      translate({ id: "pricing.enterprise.f5", message: "Dedicated support" }),
    ],
    action: {
      label: translate({ id: "pricing.enterprise.cta", message: "Contact Us" }),
      href: "mailto:hello@almadar.io",
    },
    highlighted: false,
  },
];

export default function Pricing(): ReactNode {
  return (
    <Layout
      title={translate({ id: "pricing.meta.title", message: "Pricing — Almadar Studio" })}
      description={translate({ id: "pricing.meta.desc", message: "Pricing coming soon. Join the waitlist." })}
    >
      <HeroSection
        title={translate({ id: "pricing.hero.title", message: "Pricing" })}
        subtitle={translate({ id: "pricing.hero.subtitle", message: "Start free. Scale when you need to. Reach out for custom and enterprise solutions." })}
      />
      <ContentSection>
        <PricingGrid plans={PLANS} />
      </ContentSection>
    </Layout>
  );
}
