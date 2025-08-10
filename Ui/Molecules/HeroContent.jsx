import React from 'react'
import { HeroTitle } from '../Atoms/HeroTitle'
import { Description } from '../Atoms/Description'
import { Button } from '../Atoms/Button'

export const HeroContent = () => {
  return (
    <div className='w-50 h-50 p-5'>
        <HeroTitle Title="Next generation digital banking" />
        <Description content="Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more." />
        <Button buttonText="Request invite" />
    </div>
  )
}
