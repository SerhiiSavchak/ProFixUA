import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}
