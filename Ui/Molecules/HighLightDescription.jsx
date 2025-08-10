import React from 'react'
import { Description } from '../Atoms/Description'
import { SubTitle } from '../Atoms/SubTitle'


export const HighLightDescription = () => {
  return (
    <div className='container'>
        <SubTitle subtitle="Why choose Digitalbank?" />
        <Description content="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before." />
    </div>
  )
}
