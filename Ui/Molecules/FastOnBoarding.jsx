import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import logo from '../../Asserts/icon-onboarding.svg'
import { DescriptionTitle } from '../Atoms/DescriptionTitle'
import { Description } from '../Atoms/Description'

export const FastOnBoarding = () => {
  return (
    <div>
        <LogoSvg logo={logo} logoname="Fast OnBoarding" />
        <DescriptionTitle descriptiontitle='Fast OnBoarding'/>
        <Description content="We don't do branches. Open your account in minutes online and start taking control of your finances right away." />
    </div>
  )
}
