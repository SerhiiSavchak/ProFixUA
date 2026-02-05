import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
}

export function Card({ children, className, clickable = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-2xl p-6 md:p-8 border border-border shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20 select-none",
        clickable && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
