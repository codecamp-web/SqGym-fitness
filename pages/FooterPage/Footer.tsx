

import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
      <div className='mt-16 basis-1/2 md:mt-0'>
      <p className='flex text-lg font-bold'>SQGYM</p>
      <p className='my-5 text-sm'>Fall in love with the process, and the results will come
        . Strength doesn’t come from what you can do
      </p>
      <p>@SQgym All Rights Reserved.</p>
      </div>
      <div className='mt-16 basis-1/4 md:mt-0'>
      <h4 className='font-bold'>Links</h4>
      <p className='my-5'>Felix Navidad orci</p>
      <p className='my-5'>Bonjour....Sir</p>
      <p className='my-5'>Massa orci senectus</p>
      </div>
      <div className='mt-16 basis-1/4 md:mt-0'>
      <h4 className='font-bold'>Contact Us</h4>
      <p className='my-5'>Gravida id et 911</p>
      <p className='my-5'>Call us on...911</p>
      <p className='my-5'>Tempus risis un 911</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
