/*
 ! Add the following to your .globals.css

       .animated-cards::before {
         @apply pointer-events-none absolute select-none rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100;
         background: radial-gradient(
           1000px circle at var(--x) var(--y),
           #c9ee80 0,
           #eebbe2 10%,
           #adc0ec 25%,
           #c9ee80 35%,
           rgba(255, 255, 255, 0) 50%,
           transparent 80%
         );
         z-index: -1;
         content: "";
         inset: -1px;
       }
*/
"use client"

import React, { forwardRef, useCallback, useEffect, useRef, useState, useMemo, memo, type MouseEvent } from "react"
import Image, { type StaticImageData } from "next/image"
import clsx from "clsx"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "motion/react"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

// Types
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface CardProps {
  title: string
  description: string
  bgClass?: string
}

interface ImageSet {
  step1dark?: StaticImageData | string
  step1light: StaticImageData | string
  step2dark?: StaticImageData | string
  step2light: StaticImageData | string
  step3dark?: StaticImageData | string
  step3light: StaticImageData | string
  step4light: StaticImageData | string
  alt: string
}

interface FeatureCarouselProps extends CardProps {
  step1imgClass?: string
  step2imgClass?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
}

interface StepImageProps {
  src: StaticImageData | string
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
}

// Constants
const TOTAL_STEPS = 4

const steps = [
  {
    id: "1",
    name: "Step 1",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    id: "2",
    name: "Step 2",
    title: "App Development",
    description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
  },
  {
    id: "3",
    name: "Step 3",
    title: "Graphic Design",
    description:
      "Creative visual solutions including branding, logos, and marketing materials that capture your brand identity.",
  },
  {
    id: "4",
    name: "Step 4",
    title: "Photo Editing",
    description: "Professional photo retouching and enhancement services to make your images stand out.",
  },
] as const

/**
 * Animation presets for reusable motion configurations.
 * Each preset defines the initial, animate, and exit states,
 * along with spring physics parameters for smooth transitions.
 */
const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  },
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      x: 100,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

/**
 * Custom hook for managing manual navigation between steps.
 * Handles navigation without auto-play functionality.
 */
function useManualNavigation(totalSteps: number = TOTAL_STEPS) {
  const [currentNumber, setCurrentNumber] = useState(0)

  // Handle manual increment (next)
  const increment = useCallback(() => {
    setCurrentNumber((prev) => (prev + 1) % totalSteps)
  }, [totalSteps])

  // Handle manual decrement (previous)
  const decrement = useCallback(() => {
    setCurrentNumber((prev) => (prev - 1 + totalSteps) % totalSteps)
  }, [totalSteps])

  // Go to specific step
  const goToStep = useCallback((step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentNumber(step)
    }
  }, [totalSteps])

  return {
    currentNumber,
    increment,
    decrement,
    goToStep,
  }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Only run on client side to prevent hydration mismatch
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent
      const isSmall = window.matchMedia("(max-width: 768px)").matches
      const isMobileDevice = Boolean(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(userAgent))

      const isDev = process.env.NODE_ENV !== "production"
      if (isDev) {
        setIsMobile(isSmall || isMobileDevice)
      } else {
        setIsMobile(isSmall && isMobileDevice)
      }
    }
  }, [])

  // Return false during SSR to ensure consistent initial render
  return isClient ? isMobile : false
}

// Components
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconChevronLeft({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      <path d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z" />
    </svg>
  )
}

function IconChevronRight({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      <path d="m181.66 133.66-80 80a8 8 0 0 1-11.32-11.32L164.69 128 90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: {
    scale: 0.8,
    opacity: 0.5,
  },
  active: {
    scale: 1,
    opacity: 1,
  },
}

const StepImage = forwardRef<HTMLImageElement, StepImageProps & { [key: string]: any }>(
  ({ src, alt, className, style, width = 1200, height = 630, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        alt={alt}
        className={className}
        src={src || "/placeholder.svg"}
        width={width}
        height={height}
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 36vw"
        style={{
          position: "absolute",
          userSelect: "none",
          maxWidth: "unset",
          ...style,
        }}
        {...props}
      />
    )
  }
)

StepImage.displayName = "StepImage"

const MotionStepImage = motion.create(StepImage)

/**
 * Wrapper component for StepImage that applies animation presets.
 * Simplifies the application of complex animations through preset configurations.
 */
const AnimatedStepImage = ({
  preset = "fadeInScale",
  delay = 0,
  onAnimationComplete,
  ...props
}: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return (
    <MotionStepImage
      {...props}
      {...presetConfig}
      transition={{
        ...presetConfig.transition,
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
    />
  )
}

/**
 * Main card component that handles mouse tracking for gradient effect.
 * Uses motion values to create an interactive gradient that follows the cursor.
 */
function FeatureCard({
  bgClass,
  children,
  step,
}: CardProps & {
  children: React.ReactNode
  step: number
}) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-cards relative w-full rounded-[16px]"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          "group relative w-full overflow-hidden rounded-[32px] md:rounded-3xl border-2 md:border border-black/20 bg-gradient-to-b from-neutral-900/95 to-neutral-800/90 shadow-xl",
          "md:hover:border-transparent",
          bgClass,
        )}
      >
        <div className="m-4 md:m-10 min-h-[340px] md:min-h-[520px] lg:min-h-[560px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full md:w-3/5 lg:w-2/5 flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <motion.h2
                className="text-xl font-bold tracking-tight text-white md:text-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <p className="text-sm leading-5 text-neutral-300 sm:text-base sm:leading-5 dark:text-zinc-400">
                  <Balancer>{steps[step].description}</Balancer>
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {mounted ? children : null}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Navigation arrows component for manual carousel control.
 * Provides left and right arrow buttons for navigation.
 */
function NavigationArrows({
  onPrevious,
  onNext,
  currentStep,
  totalSteps,
}: {
  onPrevious: () => void
  onNext: () => void
  currentStep: number
  totalSteps: number
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-between px-4 pointer-events-none">
      {/* Left Arrow */}
      <motion.button
        onClick={onPrevious}
        className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-neutral-700/40 md:bg-white/10 backdrop-blur-sm border border-neutral-600/40 md:border-white/20 text-white hover:bg-neutral-700/60 md:hover:bg-white/20 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous service"
      >
        <IconChevronLeft className="h-5 w-5" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={onNext}
        className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-neutral-700/40 md:bg-white/10 backdrop-blur-sm border border-neutral-600/40 md:border-white/20 text-white hover:bg-neutral-700/60 md:hover:bg-white/20 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next service"
      >
        <IconChevronRight className="h-5 w-5" />
      </motion.button>
    </div>
  )
}

const defaultClasses = {
  step1img:
    "pointer-events-none w-[85%] sm:w-[75%] md:w-[42%] lg:w-[44%] border border-border-100/10 transition-all duration-500 dark:border-border-700/50 rounded-2xl left-1/2 md:left-[60%] lg:left-[68%] -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[56%] lg:top-[58%]",
  step2img:
    "pointer-events-none w-[85%] sm:w-[75%] md:w-[42%] lg:w-[44%] border border-border-100/10 dark:border-border-700/50 transition-all duration-500 overflow-hidden rounded-2xl left-1/2 md:left-[60%] lg:left-[68%] -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[56%] lg:top-[58%]",
  step3img:
    "pointer-events-none w-[85%] sm:w-[75%] md:w-[42%] lg:w-[44%] border border-border-100/10 dark:border-border-700 rounded-2xl transition-all duration-500 overflow-hidden left-1/2 md:left-[60%] lg:left-[68%] -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[56%] lg:top-[58%]",
  step4img:
    "pointer-events-none w-[85%] sm:w-[75%] md:w-[42%] lg:w-[44%] border border-border-100/10 dark:border-border-700 rounded-2xl transition-all duration-500 overflow-hidden left-1/2 md:left-[60%] lg:left-[68%] -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[56%] lg:top-[58%]",
} as const

/**
 * Main component that orchestrates the multi-step animation sequence.
 * Manages state transitions, handles animation timing, and prevents
 * animation conflicts through the isAnimating flag.
 */
export const FeatureCarousel = memo(function FeatureCarousel({
  image,
  step1imgClass = defaultClasses.step1img,
  step2imgClass = defaultClasses.step2img,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: FeatureCarouselProps) {
  const { currentNumber: step, increment, decrement } = useManualNavigation()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    increment()
    // Fallback to reset animation state after 300ms
    setTimeout(() => setIsAnimating(false), 300)
  }, [isAnimating, increment])

  const handlePrevious = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    decrement()
    // Fallback to reset animation state after 300ms
    setTimeout(() => setIsAnimating(false), 300)
  }, [isAnimating, decrement])

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const renderStepContent = () => {
    const content = () => {
      switch (step) {
        case 0:
          /**
           * Layout: Single centered image for Web Development
           * - Centered image: 70% width, positioned center
           * Animation:
           * - Image fades in and scales up from 95%
           * - Uses spring animation for smooth motion
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step1imgClass, "absolute transform-gpu")}
              src={image.step1light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
              priority={step === 0}
              loading={step === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          )
        case 1:
          /**
           * Layout: Single centered image for App Development
           * - Centered image: 70% width, positioned center
           * Animation:
           * - Image fades in and scales up from 95%
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step2imgClass, "absolute transform-gpu")}
              src={image.step2light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 2:
          /**
           * Layout: Single centered image for Graphic Design
           * - Centered image: 70% width, positioned center
           * Animation:
           * - Fades in and scales up from 95%
           * - Uses spring animation for smooth scaling
           * - Triggers animation complete callback
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step3imgClass, "absolute")}
              src={image.step3light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        case 3:
          /**
           * Layout: Single centered image for Photo Editing
           * - Centered image: 70% width, positioned center
           * Animation:
           * - Image fades in and scales up
           * - Uses spring physics for natural motion
           */
          return (
            <AnimatedStepImage
              alt={image.alt}
              className={clsx(step4imgClass, "absolute")}
              src={image.step4light}
              preset="fadeInScale"
              onAnimationComplete={handleAnimationComplete}
            />
          )
        default:
          return null
      }
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full absolute">
          {content()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <FeatureCard {...props} step={step}>
      {renderStepContent()}
      <NavigationArrows
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentStep={step}
        totalSteps={TOTAL_STEPS}
      />
      {/* Mobile-only pagination dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="absolute inset-x-0 bottom-4 z-50 flex justify-center md:static md:mt-4"
      >
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={clsx(
                "h-2.5 w-2.5 rounded-full transition-all duration-200",
                i === step ? "bg-white" : "bg-white/40",
              )}
            />
          ))}
        </div>
      </motion.div>
    </FeatureCard>
  )
})

FeatureCarousel.displayName = "FeatureCarousel"