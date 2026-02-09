"use client";

import { Phone, Send, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { CITY_CONFIG } from "@/content/i18n";

export function Contacts() {
  const { language, t } = useTranslation();
  const { city } = useCityContext();
  const cityConfig = city ? CITY_CONFIG[city] : CITY_CONFIG.lviv;

  return (
    <Section id="contacts" className="bg-accent/30">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.contacts.title}</SectionTitle>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-3xl p-6 md:p-8 border border-border shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <a
                href={`tel:${cityConfig.phone}`}
                className="block text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary hover:text-primary/80 transition-all duration-300 mb-8 hover:scale-105"
              >
                {cityConfig.phone}
              </a>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href={cityConfig.telegramUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift"
                >
                  <Send className="w-5 h-5" />
                  Telegram
                </Button>
                <Button href={cityConfig.viberUrl} variant="outline" className="hover-lift">
                  <Phone className="w-5 h-5" />
                  Viber
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/50 border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-accent group">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-foreground">{t.contacts.schedule}</p>
                    <p className="text-sm text-muted-foreground">
                      {cityConfig.hours[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/50 border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-accent group">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-foreground">{t.contacts.area}</p>
                    <p className="text-sm text-muted-foreground">
                      {cityConfig.serviceArea[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
