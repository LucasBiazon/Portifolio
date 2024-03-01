import { Link } from "react-router-dom";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu"

import { MdTranslate } from "react-icons/md";

export function NavBar(){
  const [position, setPosition] = useState("bottom")
  return (
    <nav className="h-16 flex items-baseline justify-between px-20 py-10">
        <h1 className="font-roboto font-semibold text-xl
          text-zinc-900 dark:text-zinc-100 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300">
           <Link to='/'>Lucas Biazon </Link> 
        </h1>
        <div className="flex gap-8">
          <Link to='/projects' className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Projects
          </Link>
          <Link to='/about' className="hover:text-zinc-600 dark:hover:text-zinc-300">
            About
          </Link>
          <Link to="http://lucasbiazon.pdf" target="_blank" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            Resume
          </Link>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:outline-none focus-visible:outline-none">
              <MdTranslate className="text-xl"/>
            </DropdownMenuTrigger>
              <DropdownMenuContent className="outline-0 w-40 border p-2 cursor-pointer rounded-md">
                <DropdownMenuLabel className="hover:outline-none focus-visible:outline-none">
                  Translate
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="w-full h-10 hover:outline-none focus-visible:outline-none">
                  <DropdownMenuRadioItem value='portuguese' className="gap-2 hover:outline-none focus-visible:outline-none">
                    Portuguese
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value='english' className="gap-2 hover:outline-none focus-visible:outline-none">
                    English
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
          </DropdownMenu>
        </div>

    </nav>
  )
}