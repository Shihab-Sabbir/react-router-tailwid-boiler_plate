import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Layout /> }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;