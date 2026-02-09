"use client";

import Image from "next/image";
import { Phone, Send, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { CITY_CONFIG } from "@/content/i18n";

export function Hero() {
  const { t, language } = useTranslation();
  const { city } = useCityContext();
  const cityConfig = city ? CITY_CONFIG[city] : null;
  
  // When city is selected, inject city name; otherwise show title without city
  const heroTitle = city && cityConfig
    ? t.hero.title.replace("{city}", cityConfig.nameInLocative[language])
    : t.hero.title.replace(/\s*(\{city\}|у \{city\}|в \{city\}|\{city\})/i, "").trim();

  return (
    <section className="relative bg-gradient-to-br from-accent/50 via-background to-primary/5 pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <Container>
        <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {t.hero.badges.map((badge, index) => (
                  <Badge key={badge} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                {heroTitle}
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground text-pretty">
                {t.hero.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  href={`tel:${cityConfig?.phone ?? "+380664838936"}`}
                  variant="primary"
                  size="lg"
                  className="hover-lift group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  {t.hero.cta.call}
                </Button>
                <Button
                  href={cityConfig?.telegramUrl ?? "https://t.me/nikoservc"}
                  variant="outline"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift"
                >
                  <Send className="w-5 h-5" />
                  {t.hero.cta.telegram}
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={500}>
              <div className="mt-4 flex justify-center lg:justify-start">
                <a
                  href={cityConfig?.viberUrl ?? "viber://chat?number=%2B380664838936"}
                  className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4 hover:underline-offset-8"
                >
                  {t.hero.cta.viber}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="scale" delay={300}>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift group">
              <Image
                src="/images/hero-master.jpg"
                alt="Професійний майстер за роботою"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
