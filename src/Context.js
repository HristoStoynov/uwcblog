import React from 'react'

const UserContext = React.createContext({
    loggedIn: false,
    id: null,
    logIn: () => { },
    logOut: () => { }
})

export default UserContext