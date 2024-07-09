import { createContext, useState } from 'react'
import { Props, ThemeContextType } from '../types/Theme'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: Props) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => !prevMode)
	}

	return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}