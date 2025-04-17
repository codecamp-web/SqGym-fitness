
import React from 'react'
import { SelectedPage } from '../../shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from "framer-motion"

const childVariant = {
    hidden: {opacity: 0, scale:0.9},
    visible: {opacity:1, scale:1}
}

type Props = {
    icon: React.ElementType
    title: string
    description: string
    setSelectedPage: (value:SelectedPage) => void
}

const BenefitComp = ({icon: Icon, title, description, setSelectedPage} : Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-green-200 px-5 py-16 text-center'>
        <div className='mb-3 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-green-100 p-4'>
                <Icon />
            </div>
        </div>    
        <h4 className='font-bold'> {title} </h4>    
        <p className='my-3'> {description} </p>
        <AnchorLink className="text-sm font-bold text-green-500 
                    hover:text-amber-400" 
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                    <p>Learn more</p>
        </AnchorLink>
    </motion.div>
  )
}

export default BenefitComp