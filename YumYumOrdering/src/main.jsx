import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/ErrorPage.jsx'
import OrderDone from './pages/OrderDone.jsx'
import MyOrder from './pages/MyOrder.jsx'
import Receipt from './pages/Receipt.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<OrderDone />,
    errorElement: <Error />
  },
  {
    path:'/MyOrder',
    element:<MyOrder />,
    errorElement: <Error />
  },
  {
    path:'/Receipt',
    element:<Receipt />,
    errorElement: <Error />
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
