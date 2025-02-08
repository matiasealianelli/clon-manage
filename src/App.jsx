//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service' 
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <div className="contSection">
        <Header />
        <Hero />
        <Service />
        <Reviews />
        <Footer />
      </div>
      
    </>
  )
}