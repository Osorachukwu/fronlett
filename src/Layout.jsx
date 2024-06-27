import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Other Pages on the website can be routed right here */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout