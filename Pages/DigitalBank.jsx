import React from 'react'
import { Header } from '../Ui/Organisms/Header'
import { Hero } from '../Ui/Organisms/Hero'
import { HighlightPage } from '../Modules/HighlightPage'
import { Footer } from '../Ui/Organisms/Footer'
import { Article } from '../Modules/Article'



export const DigitalBank = () => {
  return (
    <div>
        <Header />
        <Hero />
        <HighlightPage />
        <Article />
        <Footer />
    </div>
  )
}
