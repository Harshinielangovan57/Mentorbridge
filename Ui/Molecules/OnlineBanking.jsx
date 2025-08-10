import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import logo from '../../Asserts/icon-online.svg'
import { DescriptionTitle } from '../Atoms/DescriptionTitle'
import { Description } from '../Atoms/Description'

export const OnlineBanking = () => {
  return (
    <div>
        <LogoSvg logo={logo} logoname="Online Banking" />
        <DescriptionTitle descriptiontitle='Online Banking'/>
        <Description content='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' />
    </div>
  )
}
