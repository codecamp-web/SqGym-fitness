import React from 'react'
import {motion} from "framer-motion"
import Hprop from '../../shared/Hprop'

import { BenefitsType, SelectedPage } from "../../shared/types"

// data
import { benefits } from '../../data/benefits'

// comp
import BenefitComp from './BenefitComp'
import ActionButton from '../../shared/ActionButton'

// img
import s3xyImg from "../../imgs/s3xy.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const container = {
    hidden: {},
    visible: {
        transistion: { staggerChildren: 0.2}
    }
}

const Benefits = ({setSelectedPage} : Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* Title */}

            <div className='md:my-5 md:w-3/5'>
                <Hprop> more than just the body</Hprop>
                <p className='text-sm my-5'>We provide the best and latest fitness equipment possible, trainers
                    and therapy to get you to your ultimate fitness goals and mind with 
                    ease. Like a family
                </p>
            </div>

            {/* Subtitle */}

            <motion.div 
            initial="hidden" whileInView="visible" viewport={{once: true, amount:0.5}}
            variants={container}
            className='md:flex items-center justify-between gap-8 mt-5'>
                {benefits.map((benefit: BenefitsType) => (
                    <BenefitComp  setSelectedPage={setSelectedPage}
                    key={benefit.title}
                    icon={benefit.icon} title={benefit.title}
                    description={benefit.description}
                    />
                ))}
            </motion.div>

            {/* Another Rep */}

            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                <img src={s3xyImg} alt="graphic-yoga" className='md:w-2/4 mx-auto'/>

                <motion.div initial="hidden" whileInView="visible" 
                viewport={{once:true, amount: 0.5}} transition={{duration:0.5}}
                variants={{
                    hidden: {opacity:0, x: 50},
                    visible: {opacity:1, x:0}
                }}
                >
                    <div className='relative mt-5 md:mt-0'>
                        <Hprop>Your only limit is {" "}
                            <span className='text-green-300'>YOU !!</span>
                        </Hprop>
                    </div>
                    <motion.div initial="hidden" whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{ delay:0.2,duration:0.5}}
                variants={{
                    hidden: {opacity:0, x: 50},
                    visible: {opacity:1, x:0}
                }}
                    >
                        <p className='my-5 text-sm'>"No pain, no gain.Push yourself 
                            because no one else is going to do it for you.
The body achieves what the mind believes. Train insane or remain the same. Don’t count the 
days, make the days count Success isn’t always about greatness. It’s about consistency.
Discipline is doing what needs to be done, even when you don’t want to do it.
Motivation gets you going, but discipline keeps you growing."
                        </p>
                        <p className='my-5 text-sm'>
                        "Earned. Not given. Be stronger than your excuses.Results or excuses.
Not both. It’s not about being the best. It’s about being better than you were yesterday.
Fall in love with the process, and the results will come. Strength doesn’t come from what 
you can do. It comes from overcoming the things you thought you couldn’t."

                        </p>
                    </motion.div>
                    <div className='mt-10'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits