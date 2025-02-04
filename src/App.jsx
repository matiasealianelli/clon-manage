//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service' 
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Reviews />
      <Footer />
    </>
  )
}