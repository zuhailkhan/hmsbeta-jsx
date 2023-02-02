import Home from '../views/Home';
import Login from '../views/Login';
import Signup from '../views/Signup';
  
export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/*',
        element: <Home />
    }
]

export const publicRoutes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
]

export default [...routes, ...publicRoutes]