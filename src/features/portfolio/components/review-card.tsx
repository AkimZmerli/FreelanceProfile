import { Star } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/card"
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
    <Card className={cn("max-w-md w-full", className)}>
      <CardHeader className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
          <Image 
              src={reviewerImage?.img} 
              alt={reviewerImage?.alt || reviewerName} 
              className="w-full h-full object-cover"
              width={80}
              height={80}
            />
        </div>

        <CardTitle className="text-lg mb-2">{reviewerName}</CardTitle>

        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn("w-5 h-5", i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200")}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-[#e6e6e6] text-center">{reviewText}</p>
      </CardContent>
    </Card>
  )
}