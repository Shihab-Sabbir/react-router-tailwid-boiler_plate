import React from 'react'
import { Outlet } from 'react-router-dom'
import Toastify from '../Toastify/Toastify';
function Layout() {
    return (
        <div>
            <Toastify />
            <Outlet />
        </div>
    )
}

export default Layout;