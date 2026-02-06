"use client";

import { Phone, Wrench, Package, AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/content/i18n";

function MaterialsBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-xl bg-accent/40 border border-border p-4 md:p-5">
      <p className="font-semibold text-foreground mb-3">{label}</p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Prices() {
  const { t } = useTranslation();

  return (
    <Section id="prices">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle subtitle={t.prices.intro}>
            {t.prices.title}
          </SectionTitle>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {/* Work Payment */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="rounded-2xl bg-background border border-border p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t.prices.workPayment.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {t.prices.workPayment.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Materials Payment */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="rounded-2xl bg-background border border-border p-5 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t.prices.materialsPayment.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {t.prices.materialsPayment.intro}
              </p>
              <div className="flex flex-col gap-4">
                <MaterialsBlock
                  label={t.prices.materialsPayment.above500.label}
                  items={t.prices.materialsPayment.above500.items}
                />
                <MaterialsBlock
                  label={t.prices.materialsPayment.below500.label}
                  items={t.prices.materialsPayment.below500.items}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Important Info */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t.prices.importantInfo.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {t.prices.importantInfo.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={400}>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/20 p-5 md:p-6 transition-all duration-300 hover:bg-primary/15 hover:border-primary/30 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed text-pretty">
                {t.prices.cta}
              </p>
            </a>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
