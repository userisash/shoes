import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import './App.css'
import './nav.css'
import ShoesPage from './ShoesPage'
import ShoeDetailsPage from './Shoe'
import { Home } from './Homepage'
import { RootLayout } from './Root'
import { NavBar } from './Nav'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/shoesPage",
          element:<ShoesPage/>
        },
        {
          path:"/shoe/:id",
          element:<ShoeDetailsPage/>
        },
        
      ]
    },
  ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
        {/* <ShoesPage/> */}
    </div>
  )
}

export default App
