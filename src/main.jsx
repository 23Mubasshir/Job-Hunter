import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: productsAndCartData,
    children: [
      { path: '/', 
      element: <Home />,
      loader: () =>fetch('FeaturedJobs.json') },
      { path: '/applied-jobs', element: <AppliedJobs/> },
      { path: '/blog', element: <Blog /> },
      { path: '/statistics', element: <Statistics/> }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
