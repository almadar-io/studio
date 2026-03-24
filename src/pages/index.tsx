import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import {
  HeroSection,
  ContentSection,
  FeatureGrid,
  CTABanner,
  VStack,
  Typography,
  Box,
  GradientDivider,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { OrbitalHeroBackground } from "../components/OrbitalHeroBackground";


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
    title: translate({ id: "studio.showcase.home", message: "Project Dashboard" }),
    image: { src: "/img/screenshots/builder-home-page.png", alt: "Project dashboard" },
    description: translate({ id: "studio.showcase.home.desc", message: "All your projects in one place. Create, manage, and deploy." }),
  },
  {
    title: translate({ id: "studio.showcase.agent", message: "AI Agent" }),
    image: { src: "/img/screenshots/builder-agent.png", alt: "AI Agent chat" },
    description: translate({ id: "studio.showcase.agent.desc", message: "Describe what you want. The AI writes a complete .orb program." }),
  },
  {
    title: translate({ id: "studio.showcase.detail", message: "Project Detail" }),
    image: { src: "/img/screenshots/builder-detail-page.png", alt: "Project detail view" },
    description: translate({ id: "studio.showcase.detail.desc", message: "Full project overview with schema, history, and deployment status." }),
  },
  {
    title: translate({ id: "studio.showcase.build", message: "Schema Editor" }),
    image: { src: "/img/screenshots/builder-detail-build-page.png", alt: "Schema editor" },
    description: translate({ id: "studio.showcase.build.desc", message: "Edit .orb programs with full syntax highlighting and validation." }),
  },
  {
    title: translate({ id: "studio.showcase.viz", message: "Orbital Visualization" }),
    image: { src: "/img/screenshots/builder-detail-build-visualization-page.png", alt: "Orbital graph visualization" },
    description: translate({ id: "studio.showcase.viz.desc", message: "Visualize entity relationships and state machine flows." }),
  },
  {
    title: translate({ id: "studio.showcase.preview", message: "Live Preview" }),
    image: { src: "/img/screenshots/builder-detail-preview-page.png", alt: "Live preview" },
    description: translate({ id: "studio.showcase.preview.desc", message: "See your app running in real time as you build." }),
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
        backgroundElement={<OrbitalHeroBackground />}
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
          <Box className="w-full max-w-5xl mx-auto py-6">
            <ThemedImage
              alt="Studio How it Works Loop"
              sources={{
                light: useBaseUrl('/img/illustrations/Studio-HowItWorks-Index-light.svg'),
                dark: useBaseUrl('/img/illustrations/Studio-HowItWorks-Index-dark.svg'),
              }}
              className="w-full  drop-shadow-xl"
            />
            <Box className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 mt-4 gap-6 sm:gap-4">
              <VStack gap="xs" align="center" className="w-full sm:w-1/3">
                <Typography variant="h4" align="center">
                  <Translate id="studio.steps.describe.title">Describe</Translate>
                </Typography>
                <Typography variant="caption" color="muted" align="center">
                  <Translate id="studio.steps.describe.desc">Tell the AI what you want to build in plain language. Describe your data, workflows, and UI.</Translate>
                </Typography>
              </VStack>
              <VStack gap="xs" align="center" className="w-full sm:w-1/3">
                <Typography variant="h4" align="center">
                  <Translate id="studio.steps.generate.title">Prove</Translate>
                </Typography>
                <Typography variant="caption" color="muted" align="center">
                  <Translate id="studio.steps.generate.desc">The AI agent writes a complete .orb program. The compiler validates every state before a single line of code runs.</Translate>
                </Typography>
              </VStack>
              <VStack gap="xs" align="center" className="w-full sm:w-1/3">
                <Typography variant="h4" align="center">
                  <Translate id="studio.steps.deploy.title">Deploy</Translate>
                </Typography>
                <Typography variant="caption" color="muted" align="center">
                  <Translate id="studio.steps.deploy.desc">One click to deploy. Your app is live on Firebase Hosting with a server backend.</Translate>
                </Typography>
              </VStack>
            </Box>
          </Box>
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
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {SHOWCASE_ITEMS.map((item) => (
              <Box
                key={item.title}
                className="group rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <Box
                  className="w-full aspect-video bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image.src})` }}
                  role="img"
                  aria-label={item.image.alt}
                />
                <Box className="p-5">
                  <Typography variant="h4" className="mb-1">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="muted">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </VStack>
      </ContentSection>

      <ContentSection background="alt">
        <VStack gap="lg" align="center" className="container">
          <VStack gap="sm" align="center">
            <Typography variant="h2">
              <Translate id="studio.loop.title">Edit at Any Level</Translate>
            </Typography>
            <Typography variant="body" color="muted" className="max-w-2xl">
              <Translate id="studio.loop.subtitle">Change the description, the .orb program, or the generated code. Fixes propagate across layers. The AI can go from English to Orb, from Orb to code, and from code back to a readable spec.</Translate>
            </Typography>
          </VStack>
          <FeatureGrid items={[
            {
              icon: "message-square",
              title: translate({ id: "studio.loop.describe", message: "Describe" }),
              description: translate({ id: "studio.loop.describe.desc", message: "Write what you want in plain English. The AI generates a complete .orb program." }),
            },
            {
              icon: "code-2",
              title: translate({ id: "studio.loop.orb", message: "Orb Program" }),
              description: translate({ id: "studio.loop.orb.desc", message: "Edit the formal model directly. The compiler verifies every change before code is generated." }),
            },
            {
              icon: "file-code",
              title: translate({ id: "studio.loop.code", message: "Generated Code" }),
              description: translate({ id: "studio.loop.code.desc", message: "Production-ready TypeScript. Regenerated from the .orb model on every change." }),
            },
          ]} columns={3} />
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
