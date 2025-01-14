import {Circle, Dna, Globe2, Languages} from "lucide-react"

const Aboutfooter = () => {


    const items = [
        {name:"Sprachen", answer:"Englisch, Französich, Arabisch, TypeScript", icon:<Languages className="h-11 w-11" />},
        {name:"Wahlheimat",answer:"Sachsen", icon:<Globe2   className="h-8 w-8" />},
        {name:"Gender",answer:"Non Binary", icon:<Dna  className="h-8 w-8" />},
    ]


    return(
        <>
        {
            items.map((val, indx) => {
              return(
                <div className="p-1 w-fit relative" key={indx}>
                <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
                <h1 className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                <Circle className="h-3 w-3" /> {val.answer}
                </h1>
            </div>
              )
            })
          }
         
        </>
    )
}

export default Aboutfooter