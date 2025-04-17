

import React from 'react'

type Props = {
    children: React.ReactNode
}

const Hprop = ({children}: Props) => {
  return (
    <div  className='basis-3/5 font-sans text-3xl font-bold  uppercase'>
      {children}
    </div>
  )
}

export default Hprop
