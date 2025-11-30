"use client"
import { TextCard, TextCardPresets } from "@/shared/components/ui/TextCard"

/**
 * Simple text card component as a narrative bridge
 * between the metric cards and code transformation sections
 */
const NarrativeBridge = () => {
  return (
    <div className="w-full space-y-8">
      {/* Video Card */}
      <TextCard
        {...TextCardPresets.narrative}
        fullWidth={true}
        title="Anthropic's Refactoring Approach"
        description={
          <div className="space-y-6">
            {/* Video iframe */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/OwMu0pyYZBc"
                  title="Anthropic's Refactoring Approach"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <p className="text-center text-sm text-white/60">
              Explore Anthropic&apos;s approach to intelligent code refactoring and architectural transformation
            </p>
          </div>
        }
        animationDelay={0.2}
      />
    </div>
  )
}

export default NarrativeBridge