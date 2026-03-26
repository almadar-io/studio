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
    title: translate({ id: "studio.feature.agent.title", message: "AI Agent" }),
    description: translate({ id: "studio.feature.agent.desc", message: "Describe what you want in plain language. The DeepAgent generates a complete .orb program with entities, state machines, UI patterns, and pages." }),
  },
  {
    icon: "table" as const,
    title: translate({ id: "studio.feature.domain.title", message: "Domain Logic" }),
    description: translate({ id: "studio.feature.domain.desc", message: "Define your entities, fields, and types in a structured view. Edit domain knowledge visually or switch to raw editor mode." }),
  },
  {
    icon: "git-branch" as const,
    title: translate({ id: "studio.feature.git.title", message: "Git History" }),
    description: translate({ id: "studio.feature.git.desc", message: "Every change is a commit. Browse version history, compare diffs between any two versions, and roll back to any point." }),
  },
  {
    icon: "play-circle" as const,
    title: translate({ id: "studio.feature.preview.title", message: "Live Preview" }),
    description: translate({ id: "studio.feature.preview.desc", message: "See your application running in real time as you build. Changes compile instantly in the background. No manual refresh." }),
  },
  {
    icon: "network" as const,
    title: translate({ id: "studio.feature.viz.title", message: "Orbital Visualization" }),
    description: translate({ id: "studio.feature.viz.desc", message: "View your entire system visually using AVL. See entities, traits, transitions, and how everything connects." }),
  },
  {
    icon: "shield-check" as const,
    title: translate({ id: "studio.feature.validation.title", message: "Compiler Verification" }),
    description: translate({ id: "studio.feature.validation.desc", message: "The compiler checks every possible state your app can reach. Schema validation catches errors before you ship." }),
  },
];

const SHOWCASE_ITEMS = [
  {
    title: translate({ id: "studio.showcase.agent", message: "AI Agent" }),
    image: { src: "/img/screenshots/builder-ai-chat.png", alt: "AI Agent building an app" },
    description: translate({ id: "studio.showcase.agent.desc", message: "Describe what you want. The AI writes a complete .orb program." }),
  },
  {
    title: translate({ id: "studio.showcase.domain", message: "Domain Logic" }),
    image: { src: "/img/screenshots/builder-detail-build-domain-logic.png", alt: "Domain logic editor" },
    description: translate({ id: "studio.showcase.domain.desc", message: "Define entities, fields, and types in a structured view." }),
  },
  {
    title: translate({ id: "studio.showcase.history", message: "Git History" }),
    image: { src: "/img/screenshots/builder-detail-hq-history.png", alt: "Change history" },
    description: translate({ id: "studio.showcase.history.desc", message: "Every change is a commit. Browse, compare, and roll back." }),
  },
  {
    title: translate({ id: "studio.showcase.preview", message: "Live Preview" }),
    image: { src: "/img/screenshots/builder-detail-preview.png", alt: "Live preview" },
    description: translate({ id: "studio.showcase.preview.desc", message: "See your app running in real time as you build." }),
  },
  {
    title: translate({ id: "studio.showcase.viz", message: "Orbital Visualization" }),
    image: { src: "/img/screenshots/builder-detail-build-visualization.png", alt: "Orbital AVL visualization" },
    description: translate({ id: "studio.showcase.viz.desc", message: "View your entire system visually. Entities, traits, transitions." }),
  },
  {
    title: translate({ id: "studio.showcase.validation", message: "Compiler Verification" }),
    image: { src: "/img/screenshots/builder-detail-build-validation.png", alt: "Schema validation" },
    description: translate({ id: "studio.showcase.validation.desc", message: "The compiler checks every state before you ship." }),
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
      title={translate({ id: "studio.meta.title", message: "Build Software with AI" })}
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
                <Typography variant="body1" color="muted">{translate({ id: "studio.hero.subtitle", message: "Describe what you want. Get a working application. Edit, preview, deploy." })}</Typography>
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
