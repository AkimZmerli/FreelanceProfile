import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="pt-4  rounded-md flex flex-col justify-center items-start overflow-hidden"
  >
    <div className="font-poppins text-lg sm:text-2xl md:text-3xl lg:text-4xl dark:text-primary [text-wrap:balance] text-gray-700 text-left">
    Hire a Frontend Engineer <br /> and
    
 <span
        className="inline-flex flex-col ml-2 h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-cyan-500 dark:text-pink-500">System Architect</li>
          <li className="text-cyan-500 dark:text-pink-500">Product Owner</li>
          <li className="text-cyan-500 dark:text-pink-500">AI Pioneer</li>
          <li className="text-cyan-500 dark:text-pink-500">Story Teller</li>
          <li className="text-cyan-500 dark:text-pink-500">Chess Hustler</li>
          
          
          
         
          
        </ul>
      </span>
      
    </div>
  </div>
  )
}

export default TextRotator