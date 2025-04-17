

import React from "react"
import { SelectedPage } from "../../shared/types"

type Props = {
    title: string 
    description: string
    image: string
}

const Class = ({title, description, image} : Props) => {

    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center
    justify-center whitespace-normal bg-green-500 text-center text-green-100 opacity-0 
    transition duration-500 hover:opacity-90`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
        <img src={image} alt="" />
    </li>
  )
}

export default Class
