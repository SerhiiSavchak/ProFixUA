"use client";

import { Wrench, Zap, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "plumbing",
      icon: Wrench,
      title: t.services.plumbing.title,
      items: t.services.plumbing.items,
    },
    {
      id: "electrical",
      icon: Zap,
      title: t.services.electrical.title,
      items: t.services.electrical.items,
    },
  ];

  return (
    <Section id="services">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.services.title}</SectionTitle>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection 
                key={service.id} 
                animation={index === 0 ? "fade-right" : "fade-left"} 
                delay={index * 150}
              >
                <Card className="h-full hover-lift group cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-muted-foreground group/item"
                        style={{ animationDelay: `${itemIndex * 50}ms` }}
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-125" />
                        <span className="transition-colors group-hover/item:text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
