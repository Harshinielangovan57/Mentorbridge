import React from 'react'
import { OnlineBanking } from '../Molecules/OnlineBanking'
import { SimpleBudgeting } from '../Molecules/SimpleBudgeting'
import { FastOnBoarding } from '../Molecules/FastOnBoarding'
import { OpenAPI } from '../Molecules/OpenAPI'


export const HighLight = () => {
  return (
    <div className='card'>
        <OnlineBanking />
        <SimpleBudgeting />
        <FastOnBoarding />
        <OpenAPI />
    </div>
  )
}
