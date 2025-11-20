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
        title="Architecture Transformation Walkthrough"
        description={
          <div className="space-y-6">
            {/* Video iframe */}
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gray-900/50 backdrop-blur-sm">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
                  title="Case Study Transformation Demo"
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
              Watch the complete transformation from prototype to production-ready architecture
            </p>
          </div>
        }
        animationDelay={0.2}
      />
    </div>
  )
}

export default NarrativeBridge