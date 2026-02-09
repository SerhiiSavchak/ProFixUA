"use client";

import { Star, Quote, ExternalLink, PenLine } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { GOOGLE_REVIEWS } from "@/content/i18n";

const REVIEW_BUTTON_LABELS = {
  write: { ua: "Залишити відгук", ru: "Оставить отзыв", en: "Leave a Review" },
  view: { ua: "Переглянути відгуки", ru: "Посмотреть отзывы", en: "View Reviews" },
} as const;

export function Reviews() {
  const { t, language } = useTranslation();
  const { city } = useCityContext();

  const reviewLinks = city ? GOOGLE_REVIEWS[city] : GOOGLE_REVIEWS.default;

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

        {/* Google Reviews Buttons */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={reviewLinks.writeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover-lift"
            >
              <PenLine className="w-5 h-5" />
              {REVIEW_BUTTON_LABELS.write[language]}
            </a>
            <a
              href={reviewLinks.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover-lift"
            >
              <ExternalLink className="w-5 h-5" />
              {REVIEW_BUTTON_LABELS.view[language]}
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
