import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        if(counter === 0) return; //Si el counter es igual a 0 que ya no decremente 
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { //Se regresa un objeto con el contador
        counter,
        increment,
        decrement,
        reset
    }

}