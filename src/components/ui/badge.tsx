import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-wide transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "border-border-subtle bg-white/[0.03] text-muted hover:border-accent-blue/50 hover:text-foreground",
        blue: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
        cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
        indigo: "border-accent-indigo/30 bg-accent-indigo/10 text-accent-indigo",
        purple: "border-accent-purple/30 bg-accent-purple/10 text-accent-purple",
        outline: "border-border-strong text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
