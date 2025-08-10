import React from 'react'
import { SubTitle } from '../Ui/Atoms/SubTitle'
import { Articles } from '../Ui/Organisms/Articles'


export const Article = () => {
  return (
    <div className='article'>
        <SubTitle subtitle="Latest Articles" />
        <Articles />
        
    </div>
  )
}
