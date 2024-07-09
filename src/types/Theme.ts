import { ReactNode } from "react"


export type ThemeContextType = {
	isDarkMode: boolean
	toggleDarkMode: () => void
}

export type Props = {
	children: ReactNode
}