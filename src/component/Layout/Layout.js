import React, { createContext } from 'react'
import { Outlet } from 'react-router-dom'
export const UserContext = createContext([]);
function Layout() {
    return (
        <div>
            <UserContext.Provider>
                <div className='font-bold text-xl text-center'>Something</div>
                <Outlet/>
            </UserContext.Provider>
        </div>
    )
}

export default Layout