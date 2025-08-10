import React from 'react'
import { LogoSvg } from '../Atoms/LogoSvg'
import { HeaderNavList } from '../Molecules/HeaderNavList'
import { Button } from '../Atoms/Button'
import logo from '../../Asserts/logo-light.svg'

export const Footer = () => {
   const navList = ["About", "Contact", "Blog", "Careers","Privacy Policy"]
  return (
    <footer className='footerStyle'>
        <LogoSvg logo={logo} logoName="Digital Bank Logo" className='d-flex align-items-center gap-2' />
        <HeaderNavList navList={navList} />
        <Button buttonText='Request Invite' />
        <p> &copy; Digitalbank.All Rights Reserved</p>
    </footer>

  )
}
