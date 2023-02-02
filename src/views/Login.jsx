import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import useAuth from '../hooks/useAuth'

function Login() {
  const { auth, setAuth } = useAuth()
  const navigate = useNavigate()
  // local state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    let body = {
      email,
      password
    }

    setIsLoading(true)
    await axios.post('/user/login', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      if(response.data.status) {
        setAuth(response.data)
        setTimeout(()=> {
          setIsLoading(false)     
        }, 1000)
      }
    })
    .catch(err => {
      setIsLoading(false)
      setIsError(err.response.data)
      console.warn(err.response.data)
      setTimeout(() => {
        setIsError('')
      }, 3000)
    })
  }
  
  useEffect(() => {
    if(auth && auth.status) {
      navigate('/')
    }
  }, [auth])
  

  return (
    <>
      {isError && 
        <div className="flex sticky top-20 w-full justify-center items-center">
          <p className="text-3xl text-red-600">{isError?.err || isError?.Error}</p>
        </div>
      }
      {isLoading && 
        <div className="flex sticky top-20 w-full justify-center items-center">
          <p className="text-3xl">
            Loading...
          </p>
        </div>
      }
      <div className="h-screen flex items-center justify-center">
        <form className="w-full h-auto max-w-sm m-auto" onSubmit={handleLogin}>
          <div className="md:w-2/3">
            <label className="block font-bold md:text-right mb-2 md:mb-6 pr-4 text-3xl" htmlFor="inline-full-name">
              Login
            </label>
          </div>
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