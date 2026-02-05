import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
