import { createContext, useContext, useState } from "react";
import { darkThem, lightThem } from "../utils/colors";
const colorContext = createContext()

export default function ColorProvider({ children }) {
    const [isdark, setIsDark] = useState(true)
    const toggleThem = () => setIsDark(prev => !prev)

    const color = isdark ? darkThem : lightThem
    const value = { color, toggleThem }
    return (
        <colorContext.Provider value={value}>
            {children}
        </colorContext.Provider>
    )
}

export const useColorContext = () => {
    const context = useContext(colorContext)
    if (!context)
        throw new Error("not found")
    return context
}