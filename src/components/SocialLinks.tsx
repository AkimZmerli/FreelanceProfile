import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { FaDiscord } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://discord.com/channels/665641579368677395/1019670950297485343", icon: <FaDiscord className="scale-180"/> },
    { name: "Twitter", link: "https://x.com/AkimZmerli", icon: <Twitter /> },
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