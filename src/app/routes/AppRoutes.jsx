import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import DashboardLayout from '../layouts/DashboardLayout'
import { useDispatch } from 'react-redux'
import { currLoggedInEmployee } from '../../features/auth/state/auth_state/authAction'
import PublicRoute from '../protectedRoutes/PublicRoute'
import ProtectedRoute from '../protectedRoutes/ProtectedRoute'
import { commonRoutes } from './commonRoutes'
import RoleBaseRoute from '../protectedRoutes/RoleBaseRoute'
import adminRoutes from './adminRoutes'
import employeeRoutes from './employeeRoutes'
import Unauthorised from '../../features/common/ui/pages/Unauthorised'

const AppRoutes = () => {

    let dispatch = useDispatch ()

    useEffect(() => {
        (() => {
            dispatch(currLoggedInEmployee())
        }) ()
    }, [])
  
  let router = createBrowserRouter([
    {
        path : '/',
        element : <PublicRoute />,
        children : [
            {
                path : '',
                element : <AuthLayout /> ,
                children : [
                    {
                    path : "",
                    element : <Login />
                    },

                    {
                    path : "register",
                    element : <Register />
                    }
                    
                ]   
            }

        ]

    },

    {
        path : "/unauthorised",
        element : <Unauthorised />
    },

    {
        path : "/home",
        element : <ProtectedRoute />,
        children : [
            {
            path : '',    
            element : <DashboardLayout />,
            children : [...commonRoutes,
                {
                    element : <RoleBaseRoute allowedRoles = {["admin"]} />,
                    children : adminRoutes
                },
                {
                    element : <RoleBaseRoute allowedRoles = {["employee"]} />,
                    children : employeeRoutes
                }
            ],
                }
            ]

    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes
