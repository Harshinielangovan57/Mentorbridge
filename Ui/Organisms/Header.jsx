import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import { HeaderNavList } from '../Molecules/HeaderNavList'
import { Button } from '../Atoms/Button';
import logo from '../../Asserts/logo-dark.svg'

export const Header = () => {
  const navList = ["Home", "About", "Contact", "Blog", "Careers"]

  return (
    <header className='d-flex justify-content-around align-items-center p-3'>
        <LogoSvg logo={logo} logoName="Digital Bank Logo" />
        <HeaderNavList navList={navList} />
        <Button buttonText='Request Invite' />
    </header>
  )
}
