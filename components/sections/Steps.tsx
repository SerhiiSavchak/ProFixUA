"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

export function Steps() {
  const { t } = useTranslation();

  return (
    <Section id="how-we-work">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.steps.title}</SectionTitle>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-accent/50 cursor-pointer select-none">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    {index + 1}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2 transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {index < t.steps.items.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
