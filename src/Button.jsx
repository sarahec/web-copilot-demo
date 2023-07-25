// Write a button component with the label "Click me!"
// When the button is clicked, display the number of times it has been clicked.

import { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>
        <button onClick={handleClick}>Click me!</button>
        <p>{count}</p>
        </>
    )
    }


export default Button

