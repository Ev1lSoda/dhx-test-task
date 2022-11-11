import { useState, useEffect, useDebugValue } from "react";

function getItem(key) {
    return localStorage.getItem(key);
}

export default function useLocalStorage(initialKey) {
    let savedValue = getItem(initialKey);
    if (!savedValue) {
        localStorage.setItem(initialKey, JSON.stringify(''))
    } else {
        savedValue = JSON.parse(savedValue);
    }
    const [value, setValue] = useState(savedValue ?? '');
    useDebugValue(value);

    useEffect(()=>{
        localStorage.setItem(initialKey, JSON.stringify(value))
    }, [value])

    return [value, setValue];
}