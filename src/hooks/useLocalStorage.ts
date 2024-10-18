import {useState, useEffect} from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch(error) {
            console.log('Error', error);
            
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key,JSON.stringify(value))
        } catch(error) {
            console.log('Error',error)
        }
    }, [key,value]);

    return [value, setValue];
}
