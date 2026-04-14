import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
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
  AnimatedReveal,
} from "@almadar/ui/marketing";
import { OrbitalHeroBackground } from "../components/OrbitalHeroBackground";

const FEATURES = [
  {
    icon: "bot" as const,
    title: translate({ id: "studio.feature.agent.title", message: "Describe and Build" }),
    description: translate({ id: "studio.feature.agent.desc", message: "Type what you want in plain language. The AI agent breaks down your idea, builds the data model, creates workflows, and generates the UI — you watch it happen on the canvas." }),
  },
  {
    icon: "layout" as const,
    title: translate({ id: "studio.feature.canvas.title", message: "Visual Canvas" }),
    description: translate({ id: "studio.feature.canvas.desc", message: "See your entire application on a live canvas. Each component shows its data, states, and screens. Double-click to drill into any part and edit it directly." }),
  },
  {
    icon: "palette" as const,
    title: translate({ id: "studio.feature.edit.title", message: "Drag-and-Drop UI" }),
    description: translate({ id: "studio.feature.edit.desc", message: "Open the pattern palette and drag UI components onto any screen. Edit properties in the inspector. The AI can help — ask it to add a progress bar or rename a button." }),
  },
  {
    icon: "eye" as const,
    title: translate({ id: "studio.feature.preview.title", message: "Live Preview" }),
    description: translate({ id: "studio.feature.preview.desc", message: "See your application rendered live as it's built. Forms, data grids, navigation — everything updates in real time. No manual refresh, no waiting for builds." }),
  },
  {
    icon: "shield-check" as const,
    title: translate({ id: "studio.feature.validation.title", message: "Automatic Verification" }),
    description: translate({ id: "studio.feature.validation.desc", message: "Every change is checked automatically. The compiler catches missing fields, broken workflows, and invalid states before you deploy — not after." }),
  },
  {
    icon: "rocket" as const,
    title: translate({ id: "studio.feature.deploy.title", message: "One-Click Deploy" }),
    description: translate({ id: "studio.feature.deploy.desc", message: "Hit deploy and your app goes live. Validation, compilation, build, and hosting — handled in one step. Get a live URL in under 20 seconds." }),
  },
];

const SHOWCASE_ITEMS = [
  {
    title: translate({ id: "studio.showcase.home", message: "Your Projects" }),
    image: { src: "/img/screenshots/builder-home.png", alt: "Builder home with projects, suggestions, and activity feed" },
    description: translate({ id: "studio.showcase.home.desc", message: "All your projects in one place. Pick a suggestion or describe something new." }),
  },
  {
    title: translate({ id: "studio.showcase.agent", message: "Watch It Build" }),
    image: { src: "/img/screenshots/builder-agent-building.png", alt: "AI agent building an app on the canvas" },
    description: translate({ id: "studio.showcase.agent.desc", message: "The agent breaks down your idea and builds it step by step on the canvas." }),
  },
  {
    title: translate({ id: "studio.showcase.canvas", message: "Visual Canvas" }),
    image: { src: "/img/screenshots/builder-canvas.png", alt: "Canvas with pattern palette and screen previews" },
    description: translate({ id: "studio.showcase.canvas.desc", message: "Drill into any screen. Drag patterns from the palette. See changes instantly." }),
  },
  {
    title: translate({ id: "studio.showcase.edit", message: "Edit UI Directly" }),
    image: { src: "/img/screenshots/builder-edit-ui.png", alt: "Editing UI properties in the inspector" },
    description: translate({ id: "studio.showcase.edit.desc", message: "Select any element and edit its properties. Or ask the agent to make the change for you." }),
  },
  {
    title: translate({ id: "studio.showcase.preview", message: "Live Preview" }),
    image: { src: "/img/screenshots/builder-preview.png", alt: "Completed build with live orbital previews" },
    description: translate({ id: "studio.showcase.preview.desc", message: "Forms, data grids, and navigation — rendered live as the agent builds." }),
  },
  {
    title: translate({ id: "studio.showcase.deploy", message: "Deploy in Seconds" }),
    image: { src: "/img/screenshots/builder-deploy.png", alt: "Deploy complete with live URL" },
    description: translate({ id: "studio.showcase.deploy.desc", message: "One click. Validated, compiled, built, and live — with a URL you can share." }),
  },
];

const LOOP_ITEMS = [
  {
    icon: "message-square" as const,
    title: translate({ id: "studio.loop.describe", message: "Describe" }),
    description: translate({ id: "studio.loop.describe.desc", message: "Write what you want in plain English. The AI generates a complete .orb program." }),
  },
  {
    icon: "code-2" as const,
    title: translate({ id: "studio.loop.orb", message: "Orb Program" }),
    description: translate({ id: "studio.loop.orb.desc", message: "Edit the formal model directly. The compiler verifies every change before code is generated." }),
  },
  {
    icon: "file-code" as const,
    title: translate({ id: "studio.loop.code", message: "Generated Code" }),
    description: translate({ id: "studio.loop.code.desc", message: "Production-ready TypeScript. Regenerated from the .orb model on every change." }),
  },
];

export default function StudioHome(): ReactNode {
  return (
    <Layout
      title={translate({ id: "studio.meta.title", message: "One builder. Every role. Ship with confidence." })}
      description={translate({ id: "studio.meta.description", message: "Almadar Studio - Describe what you want, get a working application. AI-powered software builder." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full min-h-[60vh] flex items-center relative overflow-hidden">
        <OrbitalHeroBackground />
        <Box className="site-container py-20 relative z-10">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <Box className="flex-1">
              <VStack gap="lg" align="start">
                <Badge variant="primary">{translate({ id: "studio.hero.tag", message: "AI Builder" })}</Badge>
                <Typography variant="h1">
                  {translate({ id: "studio.hero.title.prefix", message: "Build Software" })}{" "}
                  <Box as="span" className="text-[var(--color-primary)]">{translate({ id: "studio.hero.title.accent", message: "with AI" })}</Box>
                </Typography>
                <Typography variant="body1" color="muted">{translate({ id: "studio.hero.subtitle", message: "One builder. Every role. Ship with confidence." })}</Typography>
                <HStack gap="md">
                  <a href="https://kflow-builder-app.web.app/">
                    <Button variant="primary" size="lg">{translate({ id: "studio.hero.cta.start", message: "Start Building" })}</Button>
                  </a>
                  <a href="/features">
                    <Button variant="secondary" size="lg">{translate({ id: "studio.hero.cta.features", message: "See Features" })}</Button>
                  </a>
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>

      {/* How It Works */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="sm" align="center">
                <Typography variant="h2">
                  <Translate id="studio.steps.title">How It Works</Translate>
                </Typography>
                <Typography variant="body1" color="muted">
                  <Translate id="studio.steps.subtitle">From idea to production in three steps</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={3} gap="lg">
              {[
                { icon: "message-square" as const, title: translate({ id: "studio.steps.describe.title", message: "Describe" }), description: translate({ id: "studio.steps.describe.desc", message: "Tell the AI what you want to build in plain language. Describe your data, workflows, and UI." }) },
                { icon: "shield-check" as const, title: translate({ id: "studio.steps.generate.title", message: "Prove" }), description: translate({ id: "studio.steps.generate.desc", message: "The AI agent writes a complete .orb program. The compiler validates every state before a single line of code runs." }) },
                { icon: "rocket" as const, title: translate({ id: "studio.steps.deploy.title", message: "Deploy" }), description: translate({ id: "studio.steps.deploy.desc", message: "One click to deploy. Your app is live on Firebase Hosting with a server backend." }) },
              ].map((step, i) => (
                <AnimatedReveal key={step.title} animation="fade-up" delay={i * 100} className="h-full">
                  <Card className="p-6 h-full">
                    <VStack gap="sm">
                      <Icon name={step.icon} size={28} className="text-[var(--color-primary)]" />
                      <Typography variant="h4">{step.title}</Typography>
                      <Typography variant="body2" color="muted">{step.description}</Typography>
                    </VStack>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* Features */}
      <Box className="w-full bg-[var(--color-surface)]">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="sm" align="center">
                <Typography variant="h2">
                  <Translate id="studio.features.title">Everything You Need to Build</Translate>
                </Typography>
                <Typography variant="body1" color="muted">
                  <Translate id="studio.features.subtitle">A complete development environment powered by AI</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={3} gap="lg">
              {FEATURES.map((f, i) => (
                <AnimatedReveal key={f.title} animation="fade-up" delay={i * 100} className="h-full">
                  <Card className="p-6 h-full">
                    <VStack gap="sm">
                      <Icon name={f.icon} size={28} className="text-[var(--color-primary)]" />
                      <Typography variant="h4">{f.title}</Typography>
                      <Typography variant="body2" color="muted">{f.description}</Typography>
                    </VStack>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* Gradient divider */}
      <Box className="w-full h-px" style={{ background: "linear-gradient(to right, transparent, var(--color-primary), transparent)" }} />

      {/* Showcase */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="sm" align="center">
                <Typography variant="h2">
                  <Translate id="studio.showcase.title">See It in Action</Translate>
                </Typography>
                <Typography variant="body1" color="muted">
                  <Translate id="studio.showcase.subtitle">Real screenshots from Almadar Studio</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={3} gap="lg">
              {SHOWCASE_ITEMS.map((item, i) => (
                <AnimatedReveal key={item.title} animation="scale-up" delay={i * 100}>
                  <Card className="overflow-hidden">
                    <Box
                      className="w-full aspect-video bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.image.src})` }}
                      role="img"
                      aria-label={item.image.alt}
                    />
                    <Box className="p-5">
                      <VStack gap="xs">
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="caption" color="muted">{item.description}</Typography>
                      </VStack>
                    </Box>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* Edit at Any Level */}
      <Box className="w-full bg-[var(--color-surface)]">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center" className="w-full">
            <AnimatedReveal animation="fade-in">
              <VStack gap="sm" align="center">
                <Typography variant="h2">
                  <Translate id="studio.loop.title">Edit at Any Level</Translate>
                </Typography>
                <Typography variant="body1" color="muted">
                  <Translate id="studio.loop.subtitle">Change the description, the .orb program, or the generated code. Fixes propagate across layers. The AI can go from English to Orb, from Orb to code, and from code back to a readable spec.</Translate>
                </Typography>
              </VStack>
            </AnimatedReveal>
            <SimpleGrid cols={3} gap="lg">
              {LOOP_ITEMS.map((item, i) => (
                <AnimatedReveal key={item.title} animation="fade-up" delay={i * 100} className="h-full">
                  <Card className="p-6 h-full">
                    <VStack gap="sm">
                      <Icon name={item.icon} size={28} className="text-[var(--color-primary)]" />
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="body2" color="muted">{item.description}</Typography>
                    </VStack>
                  </Card>
                </AnimatedReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>

      {/* CTA */}
      <AnimatedReveal animation="fade-in">
        <Box className="w-full bg-gradient-to-b from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
          <Box className="site-container py-24">
            <VStack gap="lg" align="center">
              <Typography variant="h2">{translate({ id: "studio.cta.title", message: "Start Building. It's Free." })}</Typography>
              <Typography variant="body1" color="muted">{translate({ id: "studio.cta.subtitle", message: "Create your first application in minutes. No credit card required." })}</Typography>
              <a href="https://kflow-builder-app.web.app/">
                <Button variant="primary" size="lg">{translate({ id: "studio.cta.button", message: "Open Studio" })}</Button>
              </a>
            </VStack>
          </Box>
        </Box>
      </AnimatedReveal>
    </Layout>
  );
}
