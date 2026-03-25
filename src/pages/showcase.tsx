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
  Card,
  SimpleGrid,
} from "@almadar/ui/marketing";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const PROJECTS = [
  {
    title: translate({ id: "showcase.inspection.title", message: "Inspection System" }),
    description: translate({ id: "showcase.inspection.desc", message: "Field inspection platform for industrial compliance. Scheduling, checklists, photo evidence, PDF reports, and real-time status tracking." }),
  },
  {
    title: translate({ id: "showcase.traitwars.title", message: "Trait Wars" }),
    description: translate({ id: "showcase.traitwars.desc", message: "Isometric strategy game with hero collection, turn-based combat, and territory control. Canvas rendering with DOM UI overlays." }),
  },
  {
    title: translate({ id: "showcase.knowledge.title", message: "Knowledge Platform" }),
    description: translate({ id: "showcase.knowledge.desc", message: "Structured knowledge management with collections, articles, quizzes, and progress tracking. Multi-tenant with role-based access." }),
  },
  {
    title: translate({ id: "showcase.blazklemenc.title", message: "Blazklemenc" }),
    description: translate({ id: "showcase.blazklemenc.desc", message: "Professional portfolio and booking system for a personal training business. Scheduling, payments, and client management." }),
  },
  {
    title: translate({ id: "showcase.winning11.title", message: "Winning-11" }),
    description: translate({ id: "showcase.winning11.desc", message: "Football team management app with player stats, match scheduling, formation builder, and tournament brackets." }),
  },
];

export default function Showcase(): ReactNode {
  return (
    <Layout
      title={translate({ id: "showcase.meta.title", message: "Showcase — Projects Built with Almadar" })}
      description={translate({ id: "showcase.meta.desc", message: "Real projects built with Almadar Studio and deployed to production." })}
    >
      {/* Hero */}
      <Box as="header" className="w-full flex items-center">
        <Box className="site-container py-20">
          <HStack gap="xl" className="flex-col lg:flex-row items-center">
            <Box className="flex-1">
              <VStack gap="lg" align="start">
                <Typography variant="h1">{translate({ id: "showcase.hero.title", message: "Showcase" })}</Typography>
                <Typography variant="body1" color="muted">{translate({ id: "showcase.hero.subtitle", message: "Real projects built with Almadar Studio and deployed to production." })}</Typography>
              </VStack>
            </Box>
            <Box className="flex-1 max-w-[300px] hidden lg:flex">
              <ThemedImage
                alt="Orbital Page"
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

      {/* Projects grid */}
      <Box className="w-full">
        <Box className="site-container py-24">
          <SimpleGrid cols={3} gap="lg">
            {PROJECTS.map((project) => (
              <Card key={project.title} className="p-6 border border-[var(--color-border)]">
                <VStack gap="sm">
                  <Typography variant="h4">{project.title}</Typography>
                  <Typography variant="body2" color="muted">{project.description}</Typography>
                </VStack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA */}
      <Box className="w-full bg-[var(--color-primary)] text-[var(--color-background)]">
        <Box className="site-container py-24">
          <VStack gap="lg" align="center">
            <Typography variant="h2" className="text-[var(--color-background)]">{translate({ id: "showcase.cta.title", message: "Build Yours Next" })}</Typography>
            <Typography variant="body1" className="text-[var(--color-background)]/60">{translate({ id: "showcase.cta.text", message: "Every project on this page was built by describing requirements to the AI agent. No templates. No boilerplate." })}</Typography>
            <a href="https://studio.almadar.io/app">
              <Button variant="secondary" size="lg">{translate({ id: "showcase.cta.button", message: "Start Building" })}</Button>
            </a>
          </VStack>
        </Box>
      </Box>
    </Layout>
  );
}
