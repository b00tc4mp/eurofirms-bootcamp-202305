import { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [page, setPage] = useState('Instaflan')

    return (
        <AppContext.Provider value={{ page, setPage }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }