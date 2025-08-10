import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import logo from '../../Asserts/bg-intro-desktop.svg'
import MobileImage from '../../Asserts/image-mockups.png'

export const HeroImage = () => {
  return (
<div className="position-relatives d-flex align-item-end w-100 scale-105 hero-image">
  <img src={MobileImage} alt='Mobile' className='position-absolute start-50 translate-end' style={{ width: "35%", bottom: "0" }} />
  <LogoSvg logo={logo} logoname="Mobile Phone" style={{ width: "100%", transform: "scale(6.5)", transformOrigin: "end" }} /> 
</div>

  )
}
