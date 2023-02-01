import { NavLink } from 'react-router-dom'
function SideBar() {
  return (
    <div className="h-screen flex flex-col gap-5">
        <NavLink to='/' className="h-1/4 bg-blue-300">Dashboard</NavLink>
        <NavLink to='/complaints' className="h-1/4 bg-blue-300">Complaints</NavLink>
        <NavLink to='/profile' className="h-1/4 bg-blue-300">Profile</NavLink>
        <NavLink to='/history' className="h-1/4 bg-blue-300">History</NavLink>
    </div>
  )
}

export default SideBar