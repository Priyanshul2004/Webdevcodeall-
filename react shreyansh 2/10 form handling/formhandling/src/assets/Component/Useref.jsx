import React, { useRef } from 'react';

function Useref() {
    const name = useRef(null);
    const age = useRef(null);

    const handlesubmit = (event)=>{
        event.preventDefault()
        console.log(name.current.value,age.current.value);
    }
    return (
        <div>
            <form action='' onSubmit={handlesubmit}>
                <input ref={name} placeholder='name' type='text' />
                <input ref={age} placeholder='age' type='text' />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default Useref;

