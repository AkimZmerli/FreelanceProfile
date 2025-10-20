import { cn } from "@/shared/lib/utils";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/shared/components/ui/button";
import Link from "next/link";
import FramerWrapper from "@/shared/components/animations/FramerWrapper";
import { FaDiscord } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { name: "Discord", link: "https://discord.com/channels/665641579368677395/1019670950297485343", icon: <FaDiscord className="h-5 w-5"/> },
    { name: "Github", link: "https://github.com/akimzmerli", icon: <Github /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/akim-zmerli-785215196/", icon: <Linkedin /> },
    
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;


/* make discord icon bigger// add another icon to the list */