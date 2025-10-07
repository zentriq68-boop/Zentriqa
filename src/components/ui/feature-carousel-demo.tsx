"use client"

import { cn } from "@/lib/utils"

import { FeatureCarousel } from "./feature-carousel"

export function FeatureCarouselDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-[34px] bg-neutral-700 p-2">
        <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
          <FeatureCarousel
            title="Professional Digital Services"
            description="From web development to creative design, we deliver excellence across all digital platforms"
            step1imgClass={cn(
              "pointer-events-none w-[70%] sm:w-[62%] md:w-[56%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50 overflow-hidden shadow-xl object-contain",
              "rounded-[24px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
            )}
            step2imgClass={cn(
              "pointer-events-none w-[70%] sm:w-[62%] md:w-[56%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden shadow-xl object-contain",
              "rounded-[24px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
            )}
            step3imgClass={cn(
              "pointer-events-none w-[70%] sm:w-[62%] md:w-[56%] border border-stone-100/10 dark:border-stone-700 rounded-[24px] transition-all duration-500 overflow-hidden shadow-xl object-contain",
              "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
            )}
            step4imgClass={cn(
              "pointer-events-none w-[70%] sm:w-[62%] md:w-[56%] border border-stone-100/10 dark:border-stone-700 rounded-[24px] transition-all duration-500 overflow-hidden shadow-xl object-contain",
              "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
            )}
            image={{
              step1light: "/Tablet images/web development.jpg",
              step2light: "/tablet pictures/App development 1.jpeg",
              step3light: "/Tablet images/Graphic design section.png",
              step4light: "/Tablet images/Photo editing.png",
              alt: "Professional services showcase",
            }}
            bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
          />
        </div>
      </div>
    </div>
  )
}