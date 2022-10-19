import React, { createContext } from 'react'
export const AuthContext = createContext();
function UserContext({ children }) {
    userinfo = {};
    return (
        <AuthContext.Provider value={userinfo}></AuthContext.Provider>
    )
}

export default UserContext;