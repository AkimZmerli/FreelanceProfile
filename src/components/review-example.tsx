"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ReviewCard from "./review-card"
import ScrambleButton from "./ScrambleButton"// Update this path to where your HackerBtn is located

export default function ReviewExample() {
  const [isVisible, setIsVisible] = useState(false)

  // Declare your PNG image paths
  const reviewerImages = {
    valentin: "/reviewer1.png", // Path relative to the public folder
    max: "/reviewer2.png",
    jeff: "/reviewer3.png",
  }

  const reviews = [
    {
      reviewerName: "Valentin Mici",
      reviewerImage: reviewerImages.valentin,
      rating: 5,
      reviewText:
        "Absolutely love WebDev4Life! They really know what they are doing, getting the best out of my brand and build an incredible website. Thank you so much.",
    },
    {
      reviewerName: "Max Planck",
      reviewerImage: reviewerImages.max,
      rating: 5,
      reviewText:
        "I actually didn't need a new Website but after seeing WebDev4Life's magic skills I had to get a new one. And it has been built to last. You have come to the right place",
    },
    {
      reviewerName: "Jeff Bezos",
      reviewerImage: reviewerImages.jeff,
      rating: 1,
      reviewText:
        "This punk scammed me! He used his moms Account and never paid for his own Prime Subscription. I want my money Back!! ",
    },
  ]

  const toggleReviews = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="p-8">
 
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              delay: index * 1,
              ease: "easeOut",
            }}
          >
            <ReviewCard
              reviewerName={review.reviewerName}
              reviewerImage={review.reviewerImage}
              rating={review.rating}
              reviewText={review.reviewText}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

