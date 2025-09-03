import { useState } from 'react'
import './App.css'
import { Navbar , Footer , Loader , Transacions , Services , Welcome } from './components'

const App = () => {

  return (
  <div className="min-h-screen">
<div className="gradient-bg-welcome">
  <Navbar />
  <Welcome />
  </div> 
  <Services />
  <Transacions />
  <Loader />
  <Footer />
  </div>
  )
}

export default App
