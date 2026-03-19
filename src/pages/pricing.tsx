import React from "react";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./pricing.module.css";

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <Heading as="h1" className={styles.heroTitle}>
          <Translate id="pricing.hero.title">Pricing</Translate>
        </Heading>
        <p className={styles.heroSubtitle}>
          <Translate id="pricing.hero.subtitle">
            Start free. Scale when you need to. Reach out for custom and enterprise solutions.
          </Translate>
        </p>
      </div>
    </header>
  );
}

const TIERS = [
  {
    nameId: "pricing.free.name", name: "Free",
    priceId: "pricing.free.price", price: "Coming Soon",
    periodId: "pricing.free.period", period: "",
    descId: "pricing.free.desc", desc: "For personal projects and learning.",
    features: ["AI agent access", "Live preview", "Community support"],
    ctaId: "pricing.free.cta", cta: "Join Waitlist",
    ctaHref: "mailto:hello@almadar.io",
    highlighted: false,
  },
  {
    nameId: "pricing.pro.name", name: "Pro",
    priceId: "pricing.pro.price", price: "Coming Soon",
    periodId: "pricing.pro.period", period: "",
    descId: "pricing.pro.desc", desc: "For professionals and small teams.",
    features: ["Priority AI generation", "One-click deploy", "Custom domains", "Email support"],
    ctaId: "pricing.pro.cta", cta: "Join Waitlist",
    ctaHref: "mailto:hello@almadar.io",
    highlighted: true,
  },
  {
    nameId: "pricing.enterprise.name", name: "Enterprise",
    priceId: "pricing.enterprise.price", price: "Coming Soon",
    periodId: "pricing.enterprise.period", period: "",
    descId: "pricing.enterprise.desc", desc: "For organizations with specific requirements.",
    features: ["Dedicated infrastructure", "Custom AI models", "SLA guarantee", "On-premise option", "Dedicated support"],
    ctaId: "pricing.enterprise.cta", cta: "Contact Us",
    ctaHref: "mailto:hello@almadar.io",
    highlighted: false,
  },
];

function PricingGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.pricingGrid}>
          {TIERS.map((tier) => (
            <div
              key={tier.nameId}
              className={`${styles.pricingCard} ${tier.highlighted ? styles.pricingCardHighlighted : ""}`}
            >
              <h3><Translate id={tier.nameId}>{tier.name}</Translate></h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  <Translate id={tier.priceId}>{tier.price}</Translate>
                </span>
                {tier.period && (
                  <span className={styles.period}>
                    <Translate id={tier.periodId}>{tier.period}</Translate>
                  </span>
                )}
              </div>
              <p className={styles.tierDesc}>
                <Translate id={tier.descId}>{tier.desc}</Translate>
              </p>
              <ul className={styles.featureList}>
                {tier.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Link
                className={`button button--lg ${tier.highlighted ? "button--primary" : "button--secondary"}`}
                href={tier.ctaHref}
              >
                <Translate id={tier.ctaId}>{tier.cta}</Translate>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Pricing(): ReactNode {
  return (
    <Layout
      title={translate({ id: "pricing.meta.title", message: "Pricing — Almadar Studio" })}
      description={translate({ id: "pricing.meta.desc", message: "Pricing coming soon. Join the waitlist." })}
    >
      <Hero />
      <main>
        <PricingGrid />
      </main>
    </Layout>
  );
}
