import { NavLink } from 'react-router-dom'
function SideBar() {
  return (
    <div className="h-screen flex flex-col gap-1">
        <NavLink to='/' className="h-10 bg-blue-300">Dashboard</NavLink>
        <NavLink to='/complaints' className="h-10 bg-blue-300">Complaints</NavLink>
        <NavLink to='/profile' className="h-10 bg-blue-300">Profile</NavLink>
        <NavLink to='/history' className="h-10 bg-blue-300">History</NavLink>
    </div>
  )
}

export default SideBar