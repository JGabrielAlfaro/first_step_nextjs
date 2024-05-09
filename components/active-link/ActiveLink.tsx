
'use client'
import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    path: string,
    text:string,
}

export function ActiveLink({path, text}:Props) {

   const pathName =  usePathname();

  return (
    <Link key={path} className={`${style.link} ${(pathName === path) && style["active-link"]}`} href={path}>{text}</Link>
  )
}





