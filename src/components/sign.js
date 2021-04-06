import React, { useState } from 'react';

function Sign(props) {
    var [data, setData] = useState("");
    const change = (e) => {
        setData(e.target.value)
    }
    return (
        <div >

            <div className="Input" onChange={(e) => change(e)}>
                <input />
                <button onClick={() => props.set(data)}>Sign Up</button>
            </div>

        </div>
    );
}

export default Sign;