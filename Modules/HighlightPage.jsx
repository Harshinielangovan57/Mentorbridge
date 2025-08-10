import React from 'react'
import { HighLightDescription } from '../Ui/Molecules/HighLightDescription'
import { HighLight } from '../Ui/Organisms/HighLight'

export const HighlightPage = () => {
  return (
    <div className='highlight'>
        <HighLightDescription />
        <HighLight />
    </div>
  )
}
