"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/shared/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { LucideIcon } from "lucide-react"

// TypeScript interfaces for customization
export interface TextCardProps {
  // Content
  title?: string
  subtitle?: string
  description?: string | React.ReactNode
  badge?: {
    text: string
    icon?: LucideIcon
    variant?: "default" | "secondary" | "destructive" | "outline"
  }
  
  // Styling variants
  variant?: "default" | "gradient" | "glass" | "accent" | "minimal"
  size?: "sm" | "md" | "lg" | "xl"
  align?: "left" | "center" | "right"
  
  // Colors for gradient variant
  gradientFrom?: string
  gradientTo?: string
  accentColor?: string
  
  // Layout
  fullWidth?: boolean
  maxWidth?: string
  
  // Animation
  animationDelay?: number
  animateOnScroll?: boolean
  
  // Additional elements
  icon?: {
    component: LucideIcon
    position?: "top" | "left" | "right"
    size?: number
    color?: string
  }
  
  // Actions
  children?: React.ReactNode
  footer?: React.ReactNode
  
  // HTML attributes
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: {
    padding: "p-4 md:p-5",
    title: "text-lg md:text-xl",
    subtitle: "text-sm md:text-base",
    description: "text-sm",
    badge: "text-xs",
  },
  md: {
    padding: "p-6 md:p-8",
    title: "text-xl md:text-2xl lg:text-3xl",
    subtitle: "text-base md:text-lg",
    description: "text-base md:text-lg",
    badge: "text-sm",
  },
  lg: {
    padding: "p-8 md:p-10",
    title: "text-2xl md:text-3xl lg:text-4xl",
    subtitle: "text-lg md:text-xl",
    description: "text-lg md:text-xl",
    badge: "text-sm",
  },
  xl: {
    padding: "p-10 md:p-12",
    title: "text-3xl md:text-4xl lg:text-5xl",
    subtitle: "text-xl md:text-2xl",
    description: "text-xl md:text-2xl",
    badge: "text-base",
  },
}

const variantClasses = {
  default: "border-white/10 bg-gradient-to-br from-white/5 to-white/2",
  gradient: "border-0 bg-gradient-to-br",
  glass: "border-white/10 bg-white/5 backdrop-blur-md",
  accent: "border-0",
  minimal: "border-0 bg-transparent",
}

const alignClasses = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
}

export const TextCard = React.forwardRef<HTMLDivElement, TextCardProps>(
  (
    {
      title,
      subtitle,
      description,
      badge,
      variant = "default",
      size = "md",
      align = "center",
      gradientFrom = "from-cyan-500/10",
      gradientTo = "to-blue-500/10",
      accentColor = "cyan",
      fullWidth = false,
      maxWidth = "max-w-4xl",
      animationDelay = 0,
      animateOnScroll = true,
      icon,
      children,
      footer,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const sizes = sizeClasses[size]
    const variants = variantClasses[variant]
    const alignment = alignClasses[align]
    
    const containerClasses = cn(
      "relative group transition-all duration-300",
      fullWidth ? "w-full" : cn("w-full", maxWidth, align === "center" && "mx-auto"),
      onClick && "cursor-pointer hover:scale-[1.02]",
      className
    )
    
    const cardClasses = cn(
      "relative overflow-hidden transition-all duration-300",
      variants,
      variant === "gradient" && `${gradientFrom} ${gradientTo}`,
      variant === "accent" && `bg-gradient-to-br from-${accentColor}-500/10 to-${accentColor}-600/10 border-${accentColor}-500/20`,
      onClick && "hover:from-white/10 hover:to-white/5"
    )
    
    const contentClasses = cn(
      "relative z-10 space-y-4",
      sizes.padding,
      alignment
    )
    
    const IconComponent = icon?.component
    
    const cardContent = (
      <Card 
        ref={ref} 
        className={cardClasses} 
        onClick={onClick}
        {...props}
      >
        {/* Animated background overlay */}
        {variant !== "minimal" && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-white/5 group-hover:to-white/5 transition-all duration-500" />
        )}
        
        <CardContent className={contentClasses}>
          {/* Badge */}
          {badge && (
            <Badge 
              variant={badge.variant || "default"} 
              className={cn("inline-flex items-center gap-2", sizes.badge)}
            >
              {badge.icon && <badge.icon className="h-3 w-3" />}
              {badge.text}
            </Badge>
          )}
          
          {/* Icon and Title Section */}
          {(icon || title) && (
            <div className={cn(
              "flex gap-4",
              icon?.position === "left" && "flex-row",
              icon?.position === "right" && "flex-row-reverse",
              icon?.position === "top" && "flex-col",
              !icon?.position && "flex-col",
              alignment
            )}>
              {IconComponent && (
                <div className={cn(
                  "flex-shrink-0",
                  variant === "glass" && "p-3 bg-white/10 rounded-lg",
                  variant === "accent" && `p-3 bg-${accentColor}-500/10 rounded-lg`
                )}>
                  <IconComponent 
                    className={cn(
                      icon.color || "text-white",
                      variant === "accent" && `text-${accentColor}-400`
                    )} 
                    size={icon.size || (size === "sm" ? 20 : size === "lg" ? 28 : size === "xl" ? 32 : 24)} 
                  />
                </div>
              )}
              
              {title && (
                <h3 className={cn(
                  sizes.title,
                  "font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent",
                  variant === "accent" && `from-${accentColor}-300 to-${accentColor}-400`
                )}>
                  {title}
                </h3>
              )}
            </div>
          )}
          
          {/* Subtitle */}
          {subtitle && (
            <p className={cn(sizes.subtitle, "text-white/80 font-medium")}>
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          {description && (
            <div className={cn(sizes.description, "text-white/70 leading-relaxed")}>
              {typeof description === "string" ? <p>{description}</p> : description}
            </div>
          )}
          
          {/* Custom children content */}
          {children}
          
          {/* Footer */}
          {footer && (
            <div className={cn(
              "pt-4 mt-4 border-t border-white/10",
              alignment
            )}>
              {footer}
            </div>
          )}
        </CardContent>
      </Card>
    )
    
    // Wrap with motion for animations
    if (animateOnScroll) {
      return (
        <motion.div
          className={containerClasses}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelay, duration: 0.6 }}
        >
          {cardContent}
        </motion.div>
      )
    }
    
    return <div className={containerClasses}>{cardContent}</div>
  }
)

TextCard.displayName = "TextCard"

// Export preset configurations for common use cases
export const TextCardPresets = {
  narrative: {
    variant: "glass" as const,
    size: "md" as const,
    align: "center" as const,
  },
  quote: {
    variant: "gradient" as const,
    size: "lg" as const,
    align: "center" as const,
    gradientFrom: "from-purple-500/10",
    gradientTo: "to-pink-500/10",
  },
  insight: {
    variant: "accent" as const,
    size: "md" as const,
    align: "left" as const,
    accentColor: "cyan",
  },
  transition: {
    variant: "minimal" as const,
    size: "lg" as const,
    align: "center" as const,
  },
  highlight: {
    variant: "gradient" as const,
    size: "md" as const,
    align: "center" as const,
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-blue-500/20",
  },
}