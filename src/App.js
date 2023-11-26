import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProductPage, Header, Checkout, SearchResults } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/product/:id' element={<ProductPage />} />
        <Route  path='/search' element={<SearchResults />} />
        <Route  path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
