import React from 'react'
import { HeroContent } from '../Molecules/HeroContent'
import { HeroImage } from '../Molecules/HeroImage'

export const Hero = () => {
  return (
    <div className='d-flex justify-content-between align-items-center bg-light mr-n4 p-5 overflow-hidden'>
        <HeroContent />
        <div className=' d-flex justify-content-end align-items-center w-50'>
        <HeroImage />
        </div>
    </div>
  )
}
   

