import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import {
  Box,
  VStack,
  Typography,
  Button,
  Card,
  SimpleGrid,
} from "@almadar/ui/marketing";

const FEATURES = [
  {
    screenshot: "/img/screenshots/builder-ai-chat.jpg",
    title: translate({ id: "features.agent.title", message: "AI Agent" }),
    description: translate({ id: "features.agent.desc", message: "Describe what you want in plain language. The DeepAgent generates a complete .orb program with entities, state machines, UI patterns, and pages." }),
  },
  {
    screenshot: "/img/screenshots/builder-domain-logic.jpg",
    title: translate({ id: "features.domain.title", message: "Domain Logic" }),
    description: translate({ id: "features.domain.desc", message: "Define your entities, fields, and types in a structured view. Edit domain knowledge visually or switch to raw editor mode." }),
  },
  {
    screenshot: "/img/screenshots/builder-workspace.jpg",
    title: translate({ id: "features.git.title", message: "Git History" }),
    description: translate({ id: "features.git.desc", message: "Every change is a commit. Browse version history, compare diffs between any two versions, and roll back to any point." }),
  },
  {
    screenshot: "/img/screenshots/builder-preview-dashboard.jpg",
    title: translate({ id: "features.preview.title", message: "Live Preview" }),
    description: translate({ id: "features.preview.desc", message: "See your application running in real time as you build. Changes compile instantly in the background. No manual refresh." }),
  },
  {
    screenshot: "/img/screenshots/builder-build-schema.jpg",
    title: translate({ id: "features.visualization.title", message: "Orbital Visualization" }),
    description: translate({ id: "features.visualization.desc", message: "View your entire system visually using AVL. See entities, traits, transitions, and how everything connects at a glance." }),
  },
  {
    screenshot: "/img/screenshots/builder-validation.jpg",
    title: translate({ id: "features.validation.title", message: "Compiler Verification" }),
    description: translate({ id: "features.validation.desc", message: "The compiler checks every possible state your app can reach. Schema validation catches errors before you ship, not after." }),
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
            <Typography variant="h1" align="center">
              {translate({ id: "features.hero.title", message: "Everything you need to build" })}
            </Typography>
            <Typography variant="body1" color="muted" align="center" className="max-w-2xl">
              {translate({ id: "features.hero.subtitle", message: "From AI-powered generation to one-click deploy. Six capabilities that take you from idea to production." })}
            </Typography>
          </VStack>
        </Box>
      </Box>

      {/* Feature cards grid */}
      <Box className="w-full pb-24">
        <Box className="site-container">
          <SimpleGrid cols={2} gap="lg">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="overflow-hidden">
                <img
                  src={feature.screenshot}
                  alt={feature.title}
                  className="w-full object-cover object-top"
                  style={{ height: 220 }}
                  loading="lazy"
                />
                <VStack gap="sm" className="p-5">
                  <Typography variant="h3">{feature.title}</Typography>
                  <Typography variant="body2" color="muted">{feature.description}</Typography>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
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
