import Image from "next/image";
import React from "react";
import Link from "next/link";

import { SkillGridProps } from "@/shared/types/components";

const SkillGrid:React.FC<SkillGridProps> = ({items}) => {
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

export default SkillGrid;
