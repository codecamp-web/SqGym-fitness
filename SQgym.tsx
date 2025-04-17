

import {React, useEffect, useState } from "react"
import Navbar from "./components/Navbar"

import {SelectedPage} from "./shared/types"

//pages 

import Home from "./pages/HomePage/Home"
import Benefits from "./pages/BenefitPage/Benefits"
import Classes from "./pages/ClassesPage/Classes"
import Contact from "./pages/ContactPage/Contact"
import Footer from "./pages/FooterPage/Footer"


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
        <Benefits setSelectedPage={setSelectedPage} />
        <Classes setSelectedPage={setSelectedPage} />
        <Contact  setSelectedPage={setSelectedPage}/>
        <Footer />
    </div>
  )
}

export default SQgym
