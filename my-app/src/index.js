import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Layout from './components/layout/index'
import Search from "./containers/search"

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Search />} />
            <Route path='*' element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

function NoPage(){ return <h1 id='no-page'>404 PAGE NOT FOUND</h1> }

reportWebVitals();  // to log results - reportWebVitals(console.log
