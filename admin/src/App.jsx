
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Users from './pages/Users/Users'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element: 
      <>
        <section className='main'>
          <Header/>
          <div className="contentMain flex">
            <div className="sidebarWrapper w-[25%]">
              <Sidebar/>
            </div>
          </div>
        </section>
        
      </>
    },
    {
      path: '/users',
      element: <Users/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
