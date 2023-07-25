// Write a button component with the label "Click me!".
// When the button is clicked, it should alert the string "Hello!".
// The button should be exported as the default export from this module.

// import React from 'react'

function Button() {
    return (
        <>
        <button onClick={() => alert("Hello!")}>Click me!</button>
        </>
    )
    }

export default Button


