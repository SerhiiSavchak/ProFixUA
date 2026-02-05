"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

export function Prices() {
  const { t } = useTranslation();

  return (
    <Section id="prices">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <AnimatedSection animation="fade-right" className="order-2 lg:order-1">
            <SectionTitle className="text-left mb-6">
              {t.prices.title}
            </SectionTitle>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.prices.description}
            </p>
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover-glow transition-all duration-300 cursor-pointer select-none">
              <p className="text-foreground font-medium">
                {t.prices.cta}
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={200} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover-lift group">
              <Image
                src="/images/tools.jpg"
                alt="Професійні інструменти"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
