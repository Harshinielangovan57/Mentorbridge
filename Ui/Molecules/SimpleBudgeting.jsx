import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import { DescriptionTitle } from '../Atoms/DescriptionTitle'
import { Description } from '../Atoms/Description'
import logo from '../../Asserts/icon-budgeting.svg'

export const SimpleBudgeting = () => {
  return (
    <div>
        <LogoSvg logo={logo} logoname='Simple Budgeting' />
        <DescriptionTitle descriptiontitle="Simple Budgeting" />
        <Description content="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits." />
    </div>
  )
}
