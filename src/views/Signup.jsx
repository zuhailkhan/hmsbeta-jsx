import { useState } from 'react'
import axios from '../api/axios'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [username, setUsername] = useState('')
    const [type, setType] = useState('1')

    const handleSignup = async (e) => {
        e.preventDefault();
        let payload = {
            email,
            name,
            password,
            mobileno: mobile,
            type,
            username
        }

        await axios.post('/user/register', JSON.stringify(payload), {
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => console.log(response.data))
        .catch(err => console.warn(err.response.data))
        .finally(() => {
            resetState()
        })
    }

    const resetState = () => {
        setName('')
        setEmail('')
        setUsername('')
        setMobile('')
        setType('1')
        setPassword('')
    }


    /* 
        1.name
        2.email
        3.mobile
        4.username
        5.type - selection
        6.password
    */
    return (
        <>
            <div className="h-full flex items-center justify-center">
                <form className="w-full max-w-lg m-auto" onSubmit={handleSignup}>
                    <p className="text-3xl font-bold mb-6">Sign Up</p>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-100" type="text" placeholder="Name" 
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Username
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-100" type="text" placeholder="Username" 
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-100" type="text" placeholder="Email" 
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Mobile Number
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500" id="grid-city" type="text" placeholder="+91" 
                                onChange={e => setMobile(e.target.value)}
                                value={mobile}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                User Type
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500" id="grid-state"
                                    onChange={e => setType(e.target.value)}
                                    value={type}
                                >
                                    <option value="1">Tenant</option>
                                    <option value="10">Worker</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500" id="grid-password" type="password" placeholder="Password" 
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="shadow bg-blue-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup