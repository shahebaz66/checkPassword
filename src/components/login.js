import React, { useState } from 'react';

function Login(props) {
    var [data, setData] = useState("");
    const change = (e) => {
        setData(e.target.value)
    }
    const click = () => {



        setData("")
        props.check(data)
    }
    return (
        <div >

            <div className="Input" >
                <input value={data} onChange={(e) => change(e)} />
                <button onClick={() => click()}>login</button>
            </div>

        </div>
    );
}

export default Login;