import { useRoutes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import routes from './routes'

function App() {
  const element = useRoutes(routes)
  
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
