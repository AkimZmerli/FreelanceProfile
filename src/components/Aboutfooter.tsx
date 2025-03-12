import {Circle, Dna, Globe2, Heart, Languages, MessagesSquare, GitPullRequestCreateArrow} from "lucide-react"

const Aboutfooter = () => {


    const items = [
        {name:"1st Phase", answer:"developing a concept together", icon:<MessagesSquare />},
        {name:"2nd Phase",answer:"transparent building: You get access to the code and witness the magic", icon: <GitPullRequestCreateArrow />},
        {name:"3rd Phase",answer:"Launching the project when you are ready", icon: <Heart className="h-10 w-10" />},
    ]


    return(
        <>
        {
            items.map((val, indx) => {
              return(
                <div className="p-1 w-fit relative" key={indx}>
                <h1 className="gap-2 text-4xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
                <h1 className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                <span className="text-xl">{val.answer}</span>
                </h1>
            </div>
              )
            })
          }
         
        </>
    )
}

export default Aboutfooter