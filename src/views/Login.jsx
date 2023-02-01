import { useState } from 'react'
import axios from '../api/axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    let body = {
      email,
      password
    }
    await axios.post('/user/login', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => console.log(response.data))
    .catch(err => console.warn(err.response.data))
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form className="w-full h-auto max-w-sm m-auto" onSubmit={handleLogin}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input 
                className="
                  bg-gray-200 
                  appearance-none 
                  border-2 
                  border-gray-200 
                  rounded 
                  w-full 
                  py-2 
                  px-4 
                  text-gray-700 
                  leading-tight 
                  focus:outline-none 
                  focus:bg-white 
                  focus:border-blue-500
                " 
                id="full_name" 
                type="text" 
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input 
                className="
                  bg-gray-200 
                  appearance-none 
                  border-2 
                  border-gray-200 
                  rounded 
                  w-full 
                  py-2 
                  px-4 
                  text-gray-700 
                  leading-tight 
                  focus:outline-none 
                  focus:bg-white 
                  focus:border-blue-500
                " 
                id="password" 
                type="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-blue-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login