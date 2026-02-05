"use client";

import { Star, Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

export function Reviews() {
  const { t } = useTranslation();

  return (
    <Section id="reviews" className="bg-accent/30">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.reviews.title}</SectionTitle>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((review, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="h-full flex flex-col hover-lift group relative overflow-hidden cursor-pointer">
                {/* Quote icon */}
                <Quote className="absolute -top-2 -right-2 w-16 h-16 text-primary/5 transition-all duration-300 group-hover:text-primary/10 group-hover:scale-110" />
                
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform"
                      style={{ 
                        transitionDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground flex-1 text-pretty relative z-10 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border relative z-10">
                  <p className="font-semibold text-foreground transition-colors group-hover:text-primary">
                    {review.name}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
