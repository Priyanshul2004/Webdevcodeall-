import React, { useState } from 'react';

function Banded5() {
    const [val, setVal] = useState({ name: "sahil", isbanded: true });

    return (
        <div className="p-4">
            <h1 className="p-4">{val.name}</h1>
            <h1 className='p-4'>{val.isbanded.toString()}</h1>
            <button onClick={() => setVal({ ...val, isbanded: !val.isbanded })} className="px-2 p-4 py-1 mt-2 rounded-full text-xs bg-blue-400 text-white">Change</button>
        </div>
    );
}

export default Banded5;


