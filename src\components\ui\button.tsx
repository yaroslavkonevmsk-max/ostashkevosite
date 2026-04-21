import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 rounded-2xl border text-sm font-semibold tracking-[0.01em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  sizes: {
    sm: "h-10 min-w-[9rem] px-4",
    md: "h-12 min-w-[10.75rem] px-6",
    lg: "h-14 min-w-[12rem] px-7"
  },
  variants: {
    primary:
      "border-[#2A715A] bg-[linear-gradient(180deg,#2D7A61,#08100D)] text-white shadow-[0_24px_46px_-24px_rgba(8,17,14,0.75)] hover:-translate-y-0.5 hover:border-[#3A9576] hover:bg-[linear-gradient(180deg,#3A9576,#0B1713)] hover:shadow-[0_30px_54px_-24px_rgba(8,17,14,0.82)]",
    secondary:
      "border-[#29433A]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,245,241,0.96))] text-ink shadow-[0_18px_36px_-28px_rgba(8,17,14,0.42)] hover:-translate-y-0.5 hover:border-bronze/45 hover:bg-white hover:shadow-[0_24px_42px_-28px_rgba(8,17,14,0.48)]",
    ghost:
      "border-transparent bg-transparent text-ink hover:border-[#29433A]/18 hover:bg-white/70"
  }
} as const;

type SharedProps = {
  children: ReactNode;
  className?: string;
  size?: keyof typeof buttonStyles.sizes;
  variant?: keyof typeof buttonStyles.variants;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps | LinkButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
    ...rest
  } = props;

  const classes = cn(
    buttonStyles.base,
    buttonStyles.sizes[size],
    buttonStyles.variants[variant],
    className
  );

  if ("href" in props) {
    const { href, ...linkProps } = rest as LinkButtonProps;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
