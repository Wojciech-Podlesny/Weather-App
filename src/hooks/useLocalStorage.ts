import {useState, useEffect} from "react";

const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch(error) {
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key,JSON.stringify(value))
        } catch(error) {
            console.log(error)
        }
    }, [key,value]);

    return [value, setValue];
}

export {useLocalStorage}