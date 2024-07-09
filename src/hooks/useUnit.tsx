import { UnitContext } from "../context/UnitContext";
import { useContext } from "react";

export const useUnit = () => {
    const context = useContext(UnitContext)
    if(!context) {
        throw new Error('useUnit must be used within a UnitProvider')
    }
    return context
}

