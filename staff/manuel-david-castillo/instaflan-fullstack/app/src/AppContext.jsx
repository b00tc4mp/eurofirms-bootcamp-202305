import { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [userIdProfile, setUserIdProfile] = useState(null)
    const [page, setPage] = useState('Instaflan')

    return (
        <AppContext.Provider value={{ userIdProfile, setUserIdProfile, page, setPage }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }