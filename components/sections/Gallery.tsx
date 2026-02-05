"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Slider } from "@/components/ui/Slider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslation } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/content/i18n";

export function Gallery() {
  const { language, t } = useTranslation();

  const images = GALLERY_IMAGES.map((img) => ({
    src: img.src,
    alt: img.alt[language],
  }));

  return (
    <Section id="gallery" className="bg-accent/30">
      <Container>
        <AnimatedSection animation="fade-up">
          <SectionTitle>{t.gallery.title}</SectionTitle>
        </AnimatedSection>
        
        <AnimatedSection animation="scale" delay={200}>
          <div className="max-w-4xl mx-auto">
            <Slider images={images} />
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
