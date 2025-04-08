import { cn } from "@/lib/utils";
import React, { HTMLProps, useState } from "react";
import "@/css/components.css";

interface GlowCardProps extends HTMLProps<HTMLLIElement> {
  contentClassName?: string;
  isSection?: boolean;
  glowColor?: string;
}

const GlowCard = ({
  className,
  children,
  contentClassName,
  glowColor,
  isSection,
  ...props
}: GlowCardProps) => {
  const [{ x, y }, setMousePosition] = useState<{
    x: Number;
    y: number;
  }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  if (isSection) {
    return (
      <section
        {...props}
        style={
          {
            "--mouse-x": `${x}px`,
            "--mouse-y": `${y}px`,
            "--glow-color": `${glowColor || "#ffffff15"}`,
          } as React.CSSProperties
        }
        className={cn("card", className!)}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        {children}
      </section>
    );
  }

  return (
    <li
      {...props}
      style={
        {
          "--mouse-x": `${x}px`,
          "--mouse-y": `${y}px`,
          "--glow-color": `${glowColor || "#ffffff15"}`,
        } as React.CSSProperties
      }
      className={cn("card card-li", className!)}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className={cn("card-content", contentClassName!)}>{children}</div>
    </li>
  );
};

export default GlowCard;
