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
  Divider,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FEATURES = [
  {
    tag: translate({ id: "features.agent.tag", message: "Intelligence" }),
    title: translate({ id: "features.agent.title", message: "AI Agent" }),
    description: translate({ id: "features.agent.desc", message: "Describe what you want in plain language. The DeepAgent generates a complete .orb program with entities, state machines, UI patterns, and pages. It understands domain requirements and produces production-quality output." }),
    bullets: [
      translate({ id: "features.agent.b1", message: "Natural language to working app" }),
      translate({ id: "features.agent.b2", message: "Domain-aware generation" }),
      translate({ id: "features.agent.b3", message: "Iterative refinement through conversation" }),
    ],
    screenshot: "/img/screenshots/builder-home-page.png",
  },
  {
    tag: translate({ id: "features.editor.tag", message: "Editing" }),
    title: translate({ id: "features.editor.title", message: "Visual Editor" }),
    description: translate({ id: "features.editor.desc", message: "Edit your application schema visually with a structured interface, or switch to code mode with a full Monaco editor. Both views stay in sync." }),
    bullets: [
      translate({ id: "features.editor.b1", message: "Drag-and-drop state machine editing" }),
      translate({ id: "features.editor.b2", message: "Monaco code editor with .orb syntax" }),
      translate({ id: "features.editor.b3", message: "Real-time validation as you type" }),
    ],
    screenshot: "/img/screenshots/builder-detail-build-page.png",
  },
  {
    tag: translate({ id: "features.git.tag", message: "Version Control" }),
    title: translate({ id: "features.git.title", message: "Git History" }),
    description: translate({ id: "features.git.desc", message: "Every change is a commit. Browse the full version history of your project, compare diffs between any two versions, and roll back to any point." }),
    bullets: [
      translate({ id: "features.git.b1", message: "Automatic commit on every change" }),
      translate({ id: "features.git.b2", message: "Visual diff viewer" }),
      translate({ id: "features.git.b3", message: "One-click rollback" }),
    ],
    screenshot: "/img/screenshots/builder-detail-page.png",
  },
  {
    tag: translate({ id: "features.preview.tag", message: "Development" }),
    title: translate({ id: "features.preview.title", message: "Live Preview" }),
    description: translate({ id: "features.preview.desc", message: "See your application running in real time as you build. Changes compile instantly in the background. No manual refresh, no waiting." }),
    bullets: [
      translate({ id: "features.preview.b1", message: "Instant compilation" }),
      translate({ id: "features.preview.b2", message: "Hot reload on schema changes" }),
      translate({ id: "features.preview.b3", message: "Mobile and desktop preview" }),
    ],
    screenshot: "/img/screenshots/builder-detail-build-visualization-page.png",
  },
  {
    tag: translate({ id: "features.deploy.tag", message: "Deployment" }),
    title: translate({ id: "features.deploy.title", message: "One-Click Deploy" }),
    description: translate({ id: "features.deploy.desc", message: "Deploy to production with Firebase App Hosting. Frontend, backend, and database are provisioned automatically. Custom domains supported." }),
    bullets: [
      translate({ id: "features.deploy.b1", message: "Firebase App Hosting integration" }),
      translate({ id: "features.deploy.b2", message: "Automatic SSL and CDN" }),
      translate({ id: "features.deploy.b3", message: "Server backend included" }),
    ],
    screenshot: "/img/screenshots/builder-detail-preview-page.png",
  },
  {
    tag: translate({ id: "features.collab.tag", message: "Collaboration" }),
    title: translate({ id: "features.collab.title", message: "Team Collaboration" }),
    description: translate({ id: "features.collab.desc", message: "Share projects with your team. Review changes, leave comments, and manage access with role-based permissions." }),
    bullets: [
      translate({ id: "features.collab.b1", message: "Shared project workspaces" }),
      translate({ id: "features.collab.b2", message: "Role-based access control" }),
      translate({ id: "features.collab.b3", message: "Change review workflow" }),
    ],
    screenshot: "/img/screenshots/builder-agent.png",
  },
];

export default function Features(): ReactNode {
  return (
    <Layout
      title={translate({ id: "features.meta.title", message: "Features — Almadar Studio" })}
      description={translate({ id: "features.meta.desc", message: "AI Agent, Visual Editor, Git History, Live Preview, One-Click Deploy, and Team Collaboration." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center">
            <Badge variant="primary">{translate({ id: "features.hero.badge", message: "Studio Features" })}</Badge>
            <Typography variant="h1" align="center">
              {translate({ id: "features.hero.title", message: "Everything you need to build" })}
            </Typography>
            <Typography variant="body1" color="muted" align="center" className="max-w-2xl">
              {translate({ id: "features.hero.subtitle", message: "From AI-powered generation to one-click deploy. Six capabilities that take you from idea to production." })}
            </Typography>
            <HStack gap="md">
              <a href="https://studio.almadar.io/app">
                <Button variant="primary" size="lg">
                  {translate({ id: "features.hero.cta1", message: "Start Building" })}
                </Button>
              </a>
              <a href="#features">
                <Button variant="secondary" size="lg">
                  {translate({ id: "features.hero.cta2", message: "See All Features" })}
                </Button>
              </a>
            </HStack>
          </VStack>
        </Box>
      </Box>

      {/* Feature sections */}
      <Box id="features">
        {FEATURES.map((feature, idx) => (
          <Box key={feature.title} className={`w-full ${idx % 2 === 1 ? "bg-[var(--color-surface)]" : ""}`}>
            <Box className="site-container py-16">
              <VStack gap="xl">
                {/* Screenshot - full width, prominent */}
                <Box
                  className="w-full rounded-xl overflow-hidden border border-[var(--color-border)]"
                  style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
                >
                  <Box
                    className="w-full bg-cover bg-top bg-no-repeat"
                    style={{
                      backgroundImage: `url(${feature.screenshot})`,
                      paddingBottom: '52%',
                    }}
                    role="img"
                    aria-label={feature.title}
                  />
                </Box>

                {/* Text content below screenshot */}
                <HStack gap="xl" className="flex-col lg:flex-row items-start">
                  <VStack gap="sm" className="flex-1">
                    <Badge variant="primary">{feature.tag}</Badge>
                    <Typography variant="h2">{feature.title}</Typography>
                    <Typography variant="body1" color="muted">{feature.description}</Typography>
                  </VStack>
                  <VStack gap="sm" className="flex-1 lg:pt-8">
                    {feature.bullets.map((bullet) => (
                      <HStack key={bullet} gap="sm" align="center" className="py-2">
                        <Box className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                          <Icon name="check" size={14} className="text-[var(--color-primary)]" />
                        </Box>
                        <Typography variant="body1">{bullet}</Typography>
                      </HStack>
                    ))}
                  </VStack>
                </HStack>
              </VStack>
            </Box>
            {idx < FEATURES.length - 1 && (
              <Box className="site-container">
                <Divider />
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box className="w-full py-24">
        <Box className="site-container">
          <VStack gap="lg" align="center">
            <Typography variant="h2" align="center">
              {translate({ id: "features.cta.title", message: "Ready to Build?" })}
            </Typography>
            <Typography variant="body1" color="muted" align="center">
              {translate({ id: "features.cta.text", message: "Create your first application in minutes. Free to start." })}
            </Typography>
            <a href="https://studio.almadar.io/app">
              <Button variant="primary" size="lg">
                {translate({ id: "features.cta.button", message: "Open Studio" })}
              </Button>
            </a>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
