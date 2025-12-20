import { Star, Quote } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/card"
import { Badge } from "@/shared/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

interface ReviewCardProps {
  reviewerName: string
  reviewerImage: { alt: string; img: any }
  rating: number
  reviewText: string
  className?: string
  animate?: boolean
}

export default function ReviewCard({
  reviewerName,
  reviewerImage,
  rating = 0,
  reviewText,
  className,
  animate = false,
}: ReviewCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full h-full", className)}
    >
      <Card className="relative h-full border dark:border-white/10 border-gray-200/50 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/2 bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-md dark:hover:from-white/8 dark:hover:to-white/4 hover:from-white/95 hover:to-gray-50/90 transition-all duration-500 overflow-hidden group shadow-lg shadow-gray-200/20">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br dark:from-purple-500/0 dark:via-pink-500/0 dark:to-orange-500/0 from-purple-600/0 via-pink-600/0 to-orange-600/0 dark:group-hover:from-purple-500/10 dark:group-hover:via-pink-500/10 dark:group-hover:to-orange-500/10 group-hover:from-purple-600/8 group-hover:via-pink-600/8 group-hover:to-orange-600/8 transition-all duration-500" />
        
        {/* Quote icon background */}
        <Quote className="absolute top-4 right-4 w-12 h-12 dark:text-white/5 text-gray-200/30 dark:group-hover:text-white/10 group-hover:text-gray-300/50 transition-colors duration-300" />
        
        <CardHeader className="relative z-10 flex flex-col items-center text-center pb-4">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 dark:border-white/20 border-gray-300/50 dark:group-hover:border-white/30 group-hover:border-gray-400/70 transition-colors duration-300">
              <Image 
                src={reviewerImage?.img} 
                alt={reviewerImage?.alt || reviewerName} 
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </div>
            {/* Verified badge for 5-star reviews */}
            {rating === 5 && (
              <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300">
                Verified
              </Badge>
            )}
          </div>

          <CardTitle className="text-xl font-bold bg-gradient-to-r dark:from-white dark:to-white/80 from-gray-800 to-gray-700 bg-clip-text text-transparent mb-3">
            {reviewerName}
          </CardTitle>

          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Star
                  className={cn(
                    "w-5 h-5 transition-colors duration-300",
                    i < rating 
                      ? "fill-cyan-400 text-cyan-400 group-hover:fill-cyan-300 group-hover:text-cyan-300" 
                      : "fill-white/10 text-white/10 group-hover:fill-white/20 group-hover:text-white/20"
                  )}
                />
              </motion.div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="relative z-10 px-6 pb-6">
          <p className="dark:text-white/70 text-gray-600 text-center leading-relaxed dark:group-hover:text-white/80 group-hover:text-gray-800 transition-colors duration-300">
            {reviewText}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}