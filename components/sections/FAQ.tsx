"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

export function FAQ() {
  const { t } = useTranslation();

  return (
    <Section id="faq" className="bg-accent/20">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.faq.title}</SectionTitle>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={t.faq.items} />
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
