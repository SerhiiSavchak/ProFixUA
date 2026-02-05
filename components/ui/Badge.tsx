import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentPropsWithoutRef<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}