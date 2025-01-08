import Image from "next/image";
import React from "react";


interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <div className="p-8 flex items-center justify-center" key={indx}>
            <Image 
              src={val?.img} 
              alt={val?.alt} 
              className="rounded-full object-contain"
              width={90}
              height={90}
            />
          </div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
