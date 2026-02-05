"use client";

import { Clock, Shield, Award, Wallet, Sparkles, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

const ICONS = [Clock, Shield, Award, Wallet, Sparkles, Phone];

export function WhyUs() {
  const { t } = useTranslation();

  return (
    <Section id="why-us" className="bg-accent/30">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.whyUs.title}</SectionTitle>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((advantage, index) => {
            const Icon = ICONS[index];
            return (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="flex gap-4 p-5 rounded-2xl bg-background/80 border border-transparent transition-all duration-300 hover:bg-background hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 group cursor-pointer select-none">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {advantage.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
