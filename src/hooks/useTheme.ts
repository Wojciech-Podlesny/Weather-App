import { ThemeContext } from '../context/DarkModeContext'
import { useContext } from 'react'
import { ThemeContextType } from '../types/Theme'

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
