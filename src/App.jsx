import { useState } from 'react'
import './App.css'
import './pages/Home'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="container ">
      <Home />
      <About />
      <Services />
      </div>
    </div>
  )
}

export default App
