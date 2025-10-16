import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface MyComponentProps{
    items:Array<{ alt: string; img: any; description: string; link: string}>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <div className="p-8 flex items-center justify-center transition-transform hover:scale-125 duration-300" key={indx}>

<a href={val?.link} target="_blank" rel="noopener noreferrer">
            <Image 
              src={val?.img} 
              alt={val?.alt} 
              className="rounded-full object-contain"
              width={120}
              height={120}
            />

            </a>
   
          </div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
