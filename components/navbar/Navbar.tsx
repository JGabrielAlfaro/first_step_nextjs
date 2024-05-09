import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from '../active-link/ActiveLink';


const navItems = [
  {path:"/about", text:"About"},
  {path:"/pricing", text:"Pricing"},
  {path:"/contact", text:"Contants"},
]

export const Navbar = () => {
  
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        {/* Elemento1 */}
        <Link href={"/"} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>

        {/* Elemento2 */}
        <div className="flex flex-1"></div>

        {/* Elemento3 */}
        {
          navItems.map( item => (
            < ActiveLink key={item.path} {...item} />
          ))
        }

    </nav>
  )
}

