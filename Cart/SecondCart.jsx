import { useAtom } from 'jotai';
import React from 'react'
import { cartAtom } from '../jotai/cartAtom';

export const SecondCart = () => {
      const [count, setCount] = useAtom(cartAtom);
  return (
        <div className=''>
        <span>&nbsp;&nbsp;count is {count}&nbsp;&nbsp;</span>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
