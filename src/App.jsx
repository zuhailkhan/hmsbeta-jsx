import { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import useAuth from './hooks/useAuth'
import routes from './routes'
import { publicRoutes } from './routes'

function App() {
  const element = useRoutes(routes)
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useAuth()
  
  useEffect(()=>{
    let fi = publicRoutes.find(x => x.path == location.pathname)
    if(!fi){
      if(!auth || !auth?.status) {
        alert('unauthorized')
        navigate('/login')
      }
    }
  },[location])

  return (
    <>
      {/* NavigationBar */}
      <NavBar />
      <main className="grid grid-cols-8">
        {/* SideBar */}
        <SideBar className="col-span-1"/>
        {/* router-view */}
        <div className="col-span-7">
          {element}
        </div>
      </main>
    </>
  )
}

export default App
