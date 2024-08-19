import Image from "next/image"
import { Card, CardContent } from "./card"
import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import { Sheet, SheetTrigger } from "./sheet"

import SidebarSheet from "../sidebar-sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image
            src="/pb-barbers.png"
            alt="PB Barbers"
            width={120}
            height={18}
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon></MenuIcon>
            </Button>
          </SheetTrigger>

          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
