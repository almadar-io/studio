import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import {
  Box,
  VStack,
  HStack,
  Typography,
  Button,
  Badge,
  Icon,
  Card,
  SimpleGrid,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
      {/* Hero with image on right */}
      <Box as="header" className="w-full flex items-center">
        <Box className="site-container py-20">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <Box className="flex-1">
              <VStack gap="lg" align="start">
                <Typography variant="h1">{translate({ id: "pricing.hero.title", message: "Pricing" })}</Typography>
                <Typography variant="body1" color="muted">{translate({ id: "pricing.hero.subtitle", message: "Start free. Scale when you need to. Reach out for custom and enterprise solutions." })}</Typography>
              </VStack>
            </Box>
            <Box className="flex-1 max-w-[300px] hidden lg:flex">
              <ThemedImage
                alt="Studio Page Vector"
                sources={{
                  light: useBaseUrl('/img/illustrations/Page-light.svg'),
                  dark: useBaseUrl('/img/illustrations/Page-dark.svg'),
                }}
                className="w-full drop-shadow-2xl"
              />
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* Pricing cards */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <SimpleGrid cols={3} gap="lg">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 ${plan.highlighted ? "border-2 border-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/20" : ""}`}
              >
                <VStack gap="md">
                  {plan.highlighted && <Badge variant="primary">Popular</Badge>}
                  <Typography variant="h3">{plan.name}</Typography>
                  <Typography variant="h2">{plan.price}</Typography>
                  <Typography variant="body2" color="muted">{plan.description}</Typography>
                  <VStack gap="sm">
                    {plan.features.map((f) => (
                      <HStack key={f} gap="sm" align="center">
                        <Icon name="check" size={16} className="text-[var(--color-primary)] shrink-0" />
                        <Typography variant="body2">{f}</Typography>
                      </HStack>
                    ))}
                  </VStack>
                  <a href={plan.action.href}>
                    <Button variant={plan.highlighted ? "primary" : "secondary"} size="lg" className="w-full">
                      {plan.action.label}
                    </Button>
                  </a>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
}
