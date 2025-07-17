import { useAtom } from 'jotai'
import React from 'react'
import { loginAtom } from '../jotai/loginAtom'
import { Welcome } from './Welcome'
import { LoginForm } from './LoginForm'

export const LoginPage = () => {
    const [loginData, setloginData] = useAtom(loginAtom)
  return (
           <div className='d-flex justify-content-center'>
      {
        loginData.loggedIn ? <Welcome /> : <LoginForm /> 
      }
    </div>
  )
}
