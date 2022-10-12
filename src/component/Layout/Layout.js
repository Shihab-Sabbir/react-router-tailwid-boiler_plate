import React, { createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Toastify from '../Toastify/Toastify';
export const UserContext = createContext([]);
function Layout() {
    return (
        <div>
            <UserContext.Provider>
                <Toastify/>
                <Outlet/>
            </UserContext.Provider>
        </div>
    )
}

export default Layout