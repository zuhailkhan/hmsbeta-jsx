import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="sticky top-0 w-screen bg-slate-500 p-3 text-white">
        <div className="flex justify-between mx-3">
            <p>Logo</p>
            <div className="flex gap-5">
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/signup'>Sign up</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar