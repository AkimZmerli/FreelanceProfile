import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link href={"https://github.com/AkimZmerli"} target="blank" className=" animate-pulse absolute top-[85%] left-0 bottom-16 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none dark:bg-slate-400 dark:text-black dark:hover:bg-black dark:hover:text-white">
      <Github />
      <span className="font-rubik text-2xl max-sm:text-xl ">Github</span>
    </Link>
  );
};

export default GithubBtn;
