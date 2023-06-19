
import React from 'react'
import Home from './component/Home'
import { Routes, Route} from 'react-router-dom'
import Cart from './component/Cart'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={  <Home/>} />
          <Route path="/cart" element={  <Cart/>} />
        </Routes>
    </div>
    
  )
}

export default App