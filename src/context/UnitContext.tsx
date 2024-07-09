import { createContext, useState } from 'react'
import { Props,UnitContextType } from '../types/Unit'

export const UnitContext = createContext<UnitContextType | null>(null)

export const UnitProvider = ({ children }: Props) => {
	const [celcius, setCelcius] = useState<boolean>(true)

	const toogleUnit = () => {
		setCelcius(prevCelcius => !prevCelcius)
	}

	return <UnitContext.Provider value={{ toogleUnit, celcius }}>{children}</UnitContext.Provider>
}


