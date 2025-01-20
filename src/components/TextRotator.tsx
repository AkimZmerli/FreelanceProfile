import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="pt-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-3xl dark:text-primary [text-wrap:balance] text-gray-700">
    I am Front-End Developer <br /> and
    
 <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-4xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-cyan-500 dark:text-pink-500">Creator</li>
          <li className="text-cyan-500 dark:text-pink-500">Freelancer</li>
          <li className="text-cyan-500 dark:text-pink-500">Software Engineer</li>
          <li className="text-cyan-500 dark:text-pink-500">Story Teller</li>
          <li className="text-cyan-500 dark:text-pink-500">Chess Hustler</li>
          
          
          
         
          
        </ul>
      </span>
      
    </div>
  </div>
  )
}

export default TextRotator