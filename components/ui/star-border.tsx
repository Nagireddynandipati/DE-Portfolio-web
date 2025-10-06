import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div className={cn(
        "relative z-1 border text-foreground text-center text-base py-4 px-6 rounded-[20px] overflow-hidden",
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/40",
        "dark:from-background dark:to-muted dark:border-border"
      )}>
        <div
          className={cn(
            "absolute w-[300%] h-[4px] bottom-0 right-[-250%] rounded-[20px] animate-star-movement-bottom z-0 shadow-sm",
            "opacity-10 dark:opacity-15" 
          )}
          style={{
            background: `radial-gradient(circle, ${defaultColor}, transparent 3%)`,
            animationDuration: speed,
          }}
        />
        <div
          className={cn(
            "absolute w-[300%] h-[4px] top-0 left-[-250%] rounded-[20px] animate-star-movement-top z-0 shadow-sm",
            "opacity-10 dark:opacity-15"
          )}
          style={{
            background: `radial-gradient(circle, ${defaultColor}, transparent 3%)`,
            animationDuration: speed,
          }}
        />
        {children}
      </div>
    </Component>
  )
}