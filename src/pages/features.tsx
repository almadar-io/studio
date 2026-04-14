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
    screenshot: "/img/screenshots/builder-home.png",
    title: translate({ id: "features.home.title", message: "Describe and Build" }),
    description: translate({ id: "features.home.desc", message: "Type what you want — a patient intake system, an e-commerce store, a booking app. The AI agent breaks it down, builds the data model, creates workflows, and generates the UI while you watch." }),
  },
  {
    screenshot: "/img/screenshots/builder-agent-building.png",
    title: translate({ id: "features.agent.title", message: "Watch It Come Together" }),
    description: translate({ id: "features.agent.desc", message: "The agent works through your app step by step: data model first, then workflows, then screens. You see each piece appear on the canvas in real time, with a progress timeline showing where things stand." }),
  },
  {
    screenshot: "/img/screenshots/builder-canvas.png",
    title: translate({ id: "features.canvas.title", message: "Visual Canvas" }),
    description: translate({ id: "features.canvas.desc", message: "Your entire application on one canvas. See every screen, every data flow, every connection. Double-click to drill into any part. Open the pattern palette to drag UI components directly onto screens." }),
  },
  {
    screenshot: "/img/screenshots/builder-edit-ui.png",
    title: translate({ id: "features.edit.title", message: "Edit UI Directly" }),
    description: translate({ id: "features.edit.desc", message: "Select any screen element and edit its properties in the inspector — labels, layout, styles. Or just ask the agent: \"add a progress bar to each step\" and it makes the change for you." }),
  },
  {
    screenshot: "/img/screenshots/builder-preview.png",
    title: translate({ id: "features.preview.title", message: "Live Preview" }),
    description: translate({ id: "features.preview.desc", message: "See your application rendered live as it's being built. Forms populate, data grids fill in, navigation works — no waiting for builds or manual refreshes." }),
  },
  {
    screenshot: "/img/screenshots/builder-deploy.png",
    title: translate({ id: "features.deploy.title", message: "One-Click Deploy" }),
    description: translate({ id: "features.deploy.desc", message: "Hit deploy and your app goes live. The compiler validates everything, generates production code, builds it, and pushes to hosting. You get a live URL in under 20 seconds." }),
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
