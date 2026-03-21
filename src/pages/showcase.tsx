import React from "react";
import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import {
  HeroSection,
  FeatureGrid,
  CTABanner,
  ContentSection,
  GradientDivider,
} from "@almadar/ui/marketing";

const PROJECTS = [
  {
    title: translate({ id: "showcase.inspection.title", message: "Inspection System" }),
    description: translate({ id: "showcase.inspection.desc", message: "Field inspection platform for industrial compliance. Scheduling, checklists, photo evidence, PDF reports, and real-time status tracking." }),
    variant: "bordered" as const,
  },
  {
    title: translate({ id: "showcase.traitwars.title", message: "Trait Wars" }),
    description: translate({ id: "showcase.traitwars.desc", message: "Isometric strategy game with hero collection, turn-based combat, and territory control. Canvas rendering with DOM UI overlays." }),
    variant: "bordered" as const,
  },
  {
    title: translate({ id: "showcase.knowledge.title", message: "Knowledge Platform" }),
    description: translate({ id: "showcase.knowledge.desc", message: "Structured knowledge management with collections, articles, quizzes, and progress tracking. Multi-tenant with role-based access." }),
    variant: "bordered" as const,
  },
  {
    title: translate({ id: "showcase.blazklemenc.title", message: "Blazklemenc" }),
    description: translate({ id: "showcase.blazklemenc.desc", message: "Professional portfolio and booking system for a personal training business. Scheduling, payments, and client management." }),
    variant: "bordered" as const,
  },
  {
    title: translate({ id: "showcase.winning11.title", message: "Winning-11" }),
    description: translate({ id: "showcase.winning11.desc", message: "Football team management app with player stats, match scheduling, formation builder, and tournament brackets." }),
    variant: "bordered" as const,
  },
];

export default function Showcase(): ReactNode {
  return (
    <Layout
      title={translate({ id: "showcase.meta.title", message: "Showcase — Projects Built with Almadar" })}
      description={translate({ id: "showcase.meta.desc", message: "Real projects built with Almadar Studio and deployed to production." })}
    >
      <HeroSection
        title={translate({ id: "showcase.hero.title", message: "Showcase" })}
        subtitle={translate({ id: "showcase.hero.subtitle", message: "Real projects built with Almadar Studio and deployed to production." })}
      />
      <GradientDivider />
      <ContentSection>
        <FeatureGrid items={PROJECTS} columns={3} />
      </ContentSection>
      <CTABanner
        title={translate({ id: "showcase.cta.title", message: "Build Yours Next" })}
        subtitle={translate({ id: "showcase.cta.text", message: "Every project on this page was built by describing requirements to the AI agent. No templates. No boilerplate." })}
        primaryAction={{ label: translate({ id: "showcase.cta.button", message: "Start Building" }), href: "https://studio.almadar.io/app" }}
        background="primary"
      />
    </Layout>
  );
}
