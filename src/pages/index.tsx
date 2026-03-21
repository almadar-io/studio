import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Translate, { translate } from "@docusaurus/Translate";
import {
  HeroSection,
  ContentSection,
  StepFlow,
  FeatureGrid,
  ShowcaseCard,
  CTABanner,
  VStack,
  Typography,
  Box,
  GradientDivider,
} from "@almadar/ui/marketing";

const STEPS = [
  {
    title: translate({ id: "studio.steps.describe.title", message: "Describe" }),
    description: translate({ id: "studio.steps.describe.desc", message: "Tell the AI what you want to build in plain language. Describe your data, workflows, and UI." }),
  },
  {
    title: translate({ id: "studio.steps.generate.title", message: "Generate" }),
    description: translate({ id: "studio.steps.generate.desc", message: "The AI agent writes a complete .orb program. The compiler validates every state before a single line of code runs." }),
  },
  {
    title: translate({ id: "studio.steps.deploy.title", message: "Deploy" }),
    description: translate({ id: "studio.steps.deploy.desc", message: "One click to deploy. Your app is live on Firebase Hosting with a server backend." }),
  },
];

const FEATURES = [
  {
    icon: "bot",
    title: translate({ id: "studio.feature.agent.title", message: "AI Agent" }),
    description: translate({ id: "studio.feature.agent.desc", message: "Describe what you want in plain language. The DeepAgent generates a complete .orb program with entities, traits, and pages." }),
  },
  {
    icon: "palette",
    title: translate({ id: "studio.feature.editor.title", message: "Visual Editor" }),
    description: translate({ id: "studio.feature.editor.desc", message: "Edit schemas visually with a drag-and-drop interface, or switch to code mode with a full Monaco editor." }),
  },
  {
    icon: "file-text",
    title: translate({ id: "studio.feature.git.title", message: "Git History" }),
    description: translate({ id: "studio.feature.git.desc", message: "Every change is a commit. Browse the full version history, compare diffs, and roll back to any point." }),
  },
  {
    icon: "search",
    title: translate({ id: "studio.feature.preview.title", message: "Live Preview" }),
    description: translate({ id: "studio.feature.preview.desc", message: "See your application running in real time as you build. Changes compile instantly in the background." }),
  },
  {
    icon: "zap",
    title: translate({ id: "studio.feature.deploy.title", message: "One-Click Deploy" }),
    description: translate({ id: "studio.feature.deploy.desc", message: "Deploy to production with Firebase App Hosting. Frontend, backend, and database provisioned automatically." }),
  },
  {
    icon: "users",
    title: translate({ id: "studio.feature.collab.title", message: "Team Collaboration" }),
    description: translate({ id: "studio.feature.collab.desc", message: "Share projects with your team. Review changes, leave comments, and manage access with roles." }),
  },
];

const SHOWCASE_ITEMS = [
  {
    title: translate({ id: "studio.showcase.hq", message: "HQ & Domain Story" }),
    image: { src: "/img/screenshots/builder-hq.png", alt: "HQ & Domain Story view" },
    description: translate({ id: "studio.showcase.hq.desc", message: "Manage your project from a single dashboard with domain context." }),
  },
  {
    title: translate({ id: "studio.showcase.viz", message: "Orbital Graph" }),
    image: { src: "/img/screenshots/builder-viz.png", alt: "Orbital Graph visualization" },
    description: translate({ id: "studio.showcase.viz.desc", message: "Visualize entity relationships and state machine flows." }),
  },
  {
    title: translate({ id: "studio.showcase.build", message: "Schema Editor" }),
    image: { src: "/img/screenshots/builder-build.png", alt: "Schema Editor interface" },
    description: translate({ id: "studio.showcase.build.desc", message: "Edit .orb programs with full syntax highlighting and validation." }),
  },
];

export default function StudioHome(): ReactNode {
  return (
    <Layout
      title={translate({ id: "studio.meta.title", message: "Build Software with AI" })}
      description={translate({ id: "studio.meta.description", message: "Almadar Studio - Describe what you want, get a working application. AI-powered software builder." })}
    >
      <HeroSection
        tag={translate({ id: "studio.hero.tag", message: "AI Builder" })}
        title={translate({ id: "studio.hero.title.prefix", message: "Build Software" })}
        titleAccent={translate({ id: "studio.hero.title.accent", message: "with AI" })}
        subtitle={translate({ id: "studio.hero.subtitle", message: "Describe what you want. Get a working application. Edit, preview, deploy." })}
        primaryAction={{ label: translate({ id: "studio.hero.cta.start", message: "Start Building" }), href: "https://kflow-builder-app.web.app/" }}
        secondaryAction={{ label: translate({ id: "studio.hero.cta.features", message: "See Features" }), href: "/features" }}
      />

      <ContentSection>
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2">
              <Translate id="studio.steps.title">How It Works</Translate>
            </Typography>
            <Typography variant="body" color="muted">
              <Translate id="studio.steps.subtitle">From idea to production in three steps</Translate>
            </Typography>
          </VStack>
          <StepFlow steps={STEPS} orientation="horizontal" showConnectors />
        </VStack>
      </ContentSection>

      <ContentSection background="dark">
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2" className="text-[var(--color-background)]">
              <Translate id="studio.features.title">Everything You Need to Build</Translate>
            </Typography>
            <Typography variant="body" className="text-[var(--color-background)]/60">
              <Translate id="studio.features.subtitle">A complete development environment powered by AI</Translate>
            </Typography>
          </VStack>
          <FeatureGrid items={FEATURES} columns={3} />
        </VStack>
      </ContentSection>

      <GradientDivider />

      <ContentSection>
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2">
              <Translate id="studio.showcase.title">See It in Action</Translate>
            </Typography>
            <Typography variant="body" color="muted">
              <Translate id="studio.showcase.subtitle">Real screenshots from Almadar Studio</Translate>
            </Typography>
          </VStack>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {SHOWCASE_ITEMS.map((item) => (
              <ShowcaseCard
                key={item.title}
                title={item.title}
                image={item.image}
              />
            ))}
          </Box>
        </VStack>
      </ContentSection>

      <ContentSection background="alt">
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2">
              <Translate id="studio.tryit.title">Try It Live</Translate>
            </Typography>
            <Typography variant="body" color="muted">
              <Translate id="studio.tryit.subtitle">Describe an app idea and watch the AI generate a complete .orb program</Translate>
            </Typography>
          </VStack>
          <Box className="flex justify-center py-4">
            <BrowserOnly fallback={<Typography variant="body" color="muted">Loading builder...</Typography>}>
              {() => {
                const { AlmadarBuilder } = require("@site/src/components/AlmadarBuilder");
                return <AlmadarBuilder />;
              }}
            </BrowserOnly>
          </Box>
        </VStack>
      </ContentSection>

      <CTABanner
        title={translate({ id: "studio.cta.title", message: "Start Building. It's Free." })}
        subtitle={translate({ id: "studio.cta.subtitle", message: "Create your first application in minutes. No credit card required." })}
        primaryAction={{ label: translate({ id: "studio.cta.button", message: "Open Studio" }), href: "https://kflow-builder-app.web.app/" }}
        background="gradient"
      />
    </Layout>
  );
}
