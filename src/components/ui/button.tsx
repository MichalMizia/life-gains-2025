import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 cursor-pointer text-white rounded-lg items-center justify-center text-sm font-medium transition-all duration-300 inline-flex focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-75 disabled:brightness-90 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "text-white hover:bg-accent-200/20",
        text: "hover:bg-slate-200",
        primary: "primary-button",
        secondary:
          "bg-accent-200 overflow-hidden text-white hover:text-black font-[500] hover:font-bold border-accent-200 after:cursor-pointer border-2 bg-accent-200/5 after:w-full relative after:absolute after:h-full after:inset-0 after:bg-accent-200 after:-z-10 isolate after:-translate-x-full hover:after:translate-x-0 after:transition-all after:duration-300",
      },
      size: {
        default: "py-2.5 px-4",
        wide: "py-3 px-8",
        large: "py-3 px-6",
        small: "py-1 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
