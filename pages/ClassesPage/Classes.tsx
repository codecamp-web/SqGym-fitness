
import React from 'react'
import { SelectedPage } from '../../shared/types'
import {motion} from "framer-motion"

import Hprop from '../../shared/Hprop'
import { classes } from '../../data/classes'
import Class from './Class'
import { ClassType } from '../../shared/types'

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Classes = ({setSelectedPage} : Props) => {
  return (
    <section id='ourclasses' className='w-full bg-green-100 py-40'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div className='mx-auto w-5/6'
            initial="hidden" whileInView="visible" 
            viewport={{once:true, amount: 0.5}} transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1, x: 0}
            }}>
                <div className='md:w-3/5'>  
                    <Hprop>classes</Hprop> 
                    <p className='py-5 text-sm'>
                        Classes are typically structured with a warm-up, a main activity or
                        sport, and a cool-down period. Instructors may also include health and 
                        fitness education topics, such as nutrition, goal-setting, and 
                        personal fitness tracking.
                    </p>
                </div>
            </motion.div>
            <div className='mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((clas:ClassType, index) => (
                        <Class key={`${clas.title}-${index}`}
                        title={clas.title} description={clas.description}
                        image={clas.image}  
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Classes
