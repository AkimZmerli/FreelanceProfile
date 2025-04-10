"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReviewCard from "./review-card"
import ScrambleButton from "./ScrambleButton"
import Image from "next/image"
import valentin from '../../public/valentin.png'
import alan from '../../public/alan.png'
import jeff from '../../public/jeff.png'

export default function ReviewExample() {
  const [isVisible, setIsVisible] = useState(false)

  const reviews = [
    {
      reviewerName: "Valentin Mici",
      reviewerImage: {
        img: "/valentin.png",
        alt: "Valentin Mici"
      },
      rating: 5,
      reviewText:
        "Absolutely love WebDev4Life! They really know what they are doing, getting the best out of my brand and build an incredible website. Thank you so much.",
    },
    {
      reviewerName: "Alan Turing",
      reviewerImage: {
        img: "/alan.png",
        alt: "Alan Turing"
      },
      rating: 5,
      reviewText:
        "I actually didn't need a new Website but after seeing WebDev4Life's magic skills I had to get a new one. And it has been built to last. You have come to the right place",
    },
    {
      reviewerName: "Jeff Bezos",
      reviewerImage: {
        img: "/jeff.png",
        alt: "Jeff Bezos"
      },
      rating: 1,
      reviewText:
        "This punk scammed me! He used his moms Account and never paid for his own Prime Subscription. I want my money Back!! ",
    },
  ];
  
  const toggleReviews = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {isVisible && reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <ReviewCard
                key={review.reviewerName}
                reviewerName={review.reviewerName}
                reviewerImage={review.reviewerImage}
                rating={review.rating}
                reviewText={review.reviewText}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
