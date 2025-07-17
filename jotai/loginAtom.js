import { atom } from 'jotai'
import React from 'react'

export const loginAtom = atom({
    name:'',
    password:'',
    loggedIn:false
})
