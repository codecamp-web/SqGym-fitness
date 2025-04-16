

import {React ,useEffect, useState, Suspense } from "react"
import Navbar from "./components/Navbar"

import {SelectedPage} from "./shared/types"
import Home from "./pages/Home"



const SQgym = () => {
  
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    )
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0){
          setIsTopOfPage(true)
          setSelectedPage(SelectedPage.Home)
        }
        if (window.scrollY !== 0) setIsTopOfPage(false)
      }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    }, [])


  return (
    <div className="bg-gray-50 w-full h-full">
        <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default SQgym
