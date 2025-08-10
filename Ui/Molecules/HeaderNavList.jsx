import React from 'react'
import { NavText } from '../Atoms/NavText'

export const HeaderNavList = ({navList}) => {
  return (
    <ul className='list-unstyled d-flex gap-5'>
        {
            navList.map ((item)=> <NavText navList={item} />)
        }
    </ul>
  )
}
