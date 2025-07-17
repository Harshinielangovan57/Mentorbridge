import React from 'react'
import { FirstCart } from './FirstCart'
import { SecondCart } from './SecondCart'

export const CartList = () => {
  return (
        <div className='d-flex flex-column align-items-center'>
      <FirstCart/>
      <SecondCart/>
    </div>
  )
}
