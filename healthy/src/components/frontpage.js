import { React, useState } from 'react'

const Input = () => {
    const [input, setInput] = useState('');

    const updateInput = event => {
        setInput(event.target.value);
        console.log("input is now", event.target.value);
    }

    return (
        <div>
            <h2>does this work</h2>
            <textarea
                onChange={updateInput}
                value={input}
            />
        </div>
    )
}

export default Input