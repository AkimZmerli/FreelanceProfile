"use client"
import { cn } from "@/lib/utils";
import DarkModeButton from "./DarkModeButton";
import { motion } from 'framer-motion';


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  Mail,
  MoreHorizontal,
 
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./animation/FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: 'Über mich',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Skillset',
      icon: (
        <Briefcase className='h-full w-full ' />
      ),
      href: '/skills',
    },
    {
      title: 'Projekte',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },
    {
      title: 'Kontakt',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
  ];
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const [hoverEnabled, setHoverEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    onMouseEnter={() => setHoverEnabled(true)}
    onMouseLeave={() => setHoverEnabled(false)}
    
    
    
  >
      <div className={`fixed top-5 right-0 left-0 px-0   sm:px-5 m-auto border- w-full sm:w-fit h-fit z-[+9999999] ${scrolling ? "hidden":"block"} `}>
        <Dock enableHover={hoverEnabled}className='items-end pb-3 rounded-full'>
          {data.map((item, idx) => (
            <Link href={item.href} key={idx}>
              <DockItem
                className={cn("aspect-square rounded-full bg-gray-200 dark:bg-neutral-700",
                  pathname === item.href && "bg-gray-100 border nav-border")}
              >
                <DockIcon className={cn(pathname === item.href && "text-cyan-500 dark:text-pink-500")}>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
          <DarkModeButton />
        </Dock>
      </div>
    </div>
  );
};

export default Navbar;

// shifted onHover logic to the parent div. Yet same issue arises. 