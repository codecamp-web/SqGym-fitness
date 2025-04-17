

import React from 'react'
import {motion} from "framer-motion"
import {useForm} from "react-hook-form"
import { SelectedPage } from '../../shared/types'
import BlackImg from "../../imgs/black.jpg"
import Hprop from '../../shared/Hprop'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const inputStyles = `w-full mb-5 rounded-lg bg-green-100 px-5 py-3 placeholder-gray-400`

const Contact = ({setSelectedPage} : Props) => {

    const {
        register, trigger, formState: {errors}
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid){
            e.preventDefault()
        }
    }

  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div className='md:w-3/5'
            initial="hidden" whileInView="visible" 
            viewport={{once:true, amount: 0.5}} transition={{duration:0.5}}
            variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1, x: 0}
            }}
            >
                <Hprop>
                <span className='text-green-300'>join now </span>
                to get in shape
                </Hprop>
                <p className='my-5 text-sm'>
                    Any enquiries about anything feel free to contact us, We will be ready 
                    to talk to you 
                </p>
            </motion.div>
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:mt-0'
                initial="hidden" whileInView="visible" 
                viewport={{once:true, amount: 0.5}} transition={{duration:0.5}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0}
                }}
                >
                    <form target='_blank' onSubmit={onSubmit}
                    action="https://formsubmit.co/headiesed@gmail.com" method='POST'>
                          {/* name */}
                        <input className={inputStyles} type='text' placeholder='Title'
                        {...register("name", {
                            required: true,
                            maxLength: 100
                        })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-amber-500'>
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max Length is 100 char"}
                            </p>
                        )}

                        {/* email*/}

                        <input className={inputStyles} type='text' placeholder='Email'
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                        })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-amber-500'>
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Max Length is 100 char"}
                            </p>
                        )}

                           {/* message body */}
                        <textarea  rows={5} cols={40}
                        className={inputStyles}  placeholder='Message'
                        {...register("message", {
                            required: true,
                            maxLength:2000,
                        })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-amber-500'>
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "maxLength" && "Max Length is 2000 char"}
                            </p>
                        )}

                        <button type='submit' className='mt-5 rounded-lg bg-green-300 px-20 py-3 
                        transition duration-500 hover:text-green-100 hover:bg-amber-300'> 
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div className='relative mt-16 basis-2/5 md:mt-0' 
                initial="hidden" whileInView="visible" 
                viewport={{once:true, amount: 0.5}} 
                transition={{delay: 0.2,duration:0.5}}
                variants={{
                    hidden: {opacity:0, y: 50},
                    visible: {opacity:1, y: 0}
                }}
                >
                    <div>
                        <img src={BlackImg} alt="comtact-img" className='h-2/4'/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact