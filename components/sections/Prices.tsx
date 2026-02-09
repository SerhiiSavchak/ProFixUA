"use client";

import Image from "next/image";
import { Phone, Wrench, Package, AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { CITY_CONFIG } from "@/content/i18n";

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
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed"
          >
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
  const { city } = useCityContext();
  const cityConfig = city ? CITY_CONFIG[city] : CITY_CONFIG.lviv;

  return (
    <Section id="prices">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle subtitle={t.prices.intro}>{t.prices.title}</SectionTitle>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Work Payment Card */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src="/images/prices/work-payment.jpg"
                  alt="Professional master at work"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-5 md:left-7 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/90 shadow-lg">
                    <Wrench className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground drop-shadow-sm">
                    {t.prices.workPayment.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 md:p-7">
                <ul className="flex flex-col gap-3">
                  {t.prices.workPayment.items.map((item, i) => (
                    <AnimatedSection key={i} animation="fade-left" delay={150 + i * 80}>
                      <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-[18px] h-[18px] text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Materials Payment Card */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src="/images/prices/materials.jpg"
                  alt="Plumbing and electrical materials"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-5 md:left-7 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/90 shadow-lg">
                    <Package className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground drop-shadow-sm">
                    {t.prices.materialsPayment.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 md:p-7">
                <AnimatedSection animation="fade-up" delay={250}>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {t.prices.materialsPayment.intro}
                  </p>
                </AnimatedSection>
                <div className="flex flex-col gap-4">
                  <AnimatedSection animation="fade-right" delay={300}>
                    <MaterialsBlock
                      label={t.prices.materialsPayment.above500.label}
                      items={t.prices.materialsPayment.above500.items}
                    />
                  </AnimatedSection>
                  <AnimatedSection animation="fade-left" delay={400}>
                    <MaterialsBlock
                      label={t.prices.materialsPayment.below500.label}
                      items={t.prices.materialsPayment.below500.items}
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Important Info Card */}
          <AnimatedSection animation="scale" delay={300}>
            <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 animate-pulse-ring">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {t.prices.importantInfo.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {t.prices.importantInfo.items.map((item, i) => (
                  <AnimatedSection key={i} animation="fade-up" delay={350 + i * 100}>
                    <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* CTA with Image */}
          <AnimatedSection animation="fade-up" delay={400}>
            <a
              href={`tel:${cityConfig.phone}`}
              className="group flex flex-col md:flex-row items-stretch rounded-2xl bg-primary/10 border border-primary/20 overflow-hidden transition-all duration-300 hover:bg-primary/15 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative h-40 md:h-auto md:w-48 flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/prices/consultation.jpg"
                  alt="Free consultation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
              </div>
              <div className="flex items-center gap-3 p-5 md:p-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed text-pretty">
                  {t.prices.cta}
                </p>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
