import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<QueryClientProvider client={queryClient}>
    <AuthProvider>
 
        <div className='max-w-4xl mx-auto bg-black text-white'>
          <RouterProvider router={Router}></RouterProvider>
        </div>
    

      
    </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode >,
)
