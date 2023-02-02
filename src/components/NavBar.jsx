import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function NavBar() {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()

  const logoutHandler = () => {
    setAuth({})
    navigate('/login')
    return
  }

  return (
    <div className="sticky top-0 w-screen bg-slate-500 p-3 text-white">
        <div className="flex justify-between mx-3">
            <NavLink to="/">Logo</NavLink>
            {
              auth && auth.status && 
              <div className='px-3'>
                <button onClick={logoutHandler}>Logout</button>
              </div>
            }

            {
              (!auth || !auth.status) && 
              <div className="flex gap-5">
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Sign up</NavLink>
              </div> 
             }
        </div>
    </div>
  )
}

export default NavBar