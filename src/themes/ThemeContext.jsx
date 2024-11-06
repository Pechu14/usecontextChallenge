
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme ] = useState("light");

    const toogleTheme = () => {
        setTheme((prevTheme)=> (prevTheme === "light" ? "dark" : "light"));    
    }

    return (
        <ThemeContext.Provider value={ {theme, toogleTheme} }>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);

