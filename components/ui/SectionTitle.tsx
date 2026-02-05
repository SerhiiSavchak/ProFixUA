import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12 text-center", className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
