
import  MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import Link from "./Link"
import { SelectedPage } from "../shared/types"
import useMediaQuery from "../hooks/useMediaQuery"
import { useState } from "react"
import ActionButton from "../shared/ActionButton"

type Props = { 
    isTopOfPage: boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumsScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? " " : "bg-green-100 drop-shadow"

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                  <div className="flex">
                    SQgym
                  <FitnessCenterIcon />
                  </div>
                  {isAboveMediumsScreens ? (
                    <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link page="Home" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Benefits" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact Us" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                    <div className={`${flexBetween} gap-8`} >
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Become a member
                        </ActionButton>
                    </div>
                    </div>
                  ) : (
                    <button className="rounded-full bg-green-400 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <MenuIcon className="text-white" />
                    </button>
                  )}   
                </div>
            </div>
        </div>

        {/* Mobile Menu Modal */}
        {!isAboveMediumsScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]
          bg-green-100 drop-shadow-xl">
            {/* Close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CloseIcon className="h-6 w-6 text-red-400"/>
              </button>
            </div>
            {/* Menu Items */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page="Home" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Benefits" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact Us" selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        />
              </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar