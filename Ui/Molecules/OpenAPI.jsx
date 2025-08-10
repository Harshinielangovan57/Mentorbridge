import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import logo from '../../Asserts/icon-api.svg'
import { DescriptionTitle } from '../Atoms/DescriptionTitle'
import { Description } from '../Atoms/Description'

export const OpenAPI = () => {
  return (
    <div>
        <LogoSvg logo={logo} logoname="Open API" />
        <DescriptionTitle descriptiontitle='Open API'/>
        <Description content='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
    </div>
  )
}
