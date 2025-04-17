
import React from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import ActionButton from "../../shared/ActionButton"
import { SelectedPage } from "../../shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {motion} from "framer-motion"

// images

import PrettyLift from "../../imgs/prettylift.jpg"
import Beijing from "../../imgs/beijing.jpg"
import BMW from "../../imgs/bmw.jpg"
import Veritas from"../../imgs/veritas.jpg"
import Slack from "../../imgs/slack.jpg"



type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumsScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section id="home" className="gap-16 bg-gray-100 py-10 md:h-full md:pb-0">
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="z-10 mt-32 md:basis-3/5">

                { isAboveMediumsScreens && (
                            <span className="absolute left-10 top-40
                            text-7xl font-bold text-gray-400
                            blur-sm ">SQGYM fitness </span>
                )}

                <motion.div className="md:-mt-20"
                initial="hidden" whileInView="visible" 
                viewport={{once:true, amount:0.5}} transition={{duration:0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity: 1, x:0},
                }}
                >
                    
                    <div >
                         <p className="text-6xl font-bold">SQGYM fitness</p>
                    </div>
                        
                    <p className="mt-8 text-sm ">
                        Your Ultimate fitness destination. We offer a wide range of training,
                        cardio, HIIT, functional workouts, and personal training programs to 
                        help you achieve your health and fitness goals.
                    </p>
                </motion.div>
                <motion.div className="mt-8 flex items-center gap-8 md:justify-start"
                initial="hidden" whileInView="visible" 
                viewport={{once:true, amount:0.5}} 
                transition={{delay:0.2 ,duration:0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity: 1, x:0},
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-green-500 
                    hover:text-amber-400" 
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn more</p>
                    </AnchorLink>
                </motion.div>
            </div>

            <div className="mt-5 md:mt-20 flex basis-3/5 
            justify-center md:z-10 md:justify-items-end">
            <img src={PrettyLift} alt="home-page-lift"  />
            </div>
        </motion.div>

        {/* SPONSORS */}
        {isAboveMediumsScreens && (
            <div className="h-[150px] w-full bg-gray-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="w-50 h-20 flex gap-8">
                        <img src={BMW} alt="bmw-sponsor" />
                        <img src={Beijing} alt="2008-sponsor" />
                        <img src={Veritas} alt="veritas-sponsor" />
                        <img src={Slack} alt="slack-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home

