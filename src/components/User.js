import { useEffect, useState } from "react";

const User=()=>{

    const [count, setCount]=useState(0);

    useEffect(()=>{

    },[]);

    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <button onClick={()=>{
                    setCount(count+1);
                }}>
                Count Increase
            </button>
            <h2>Name: Saksham</h2>
            <h3>Location: Mathura</h3>
        </div>
    );
};

export default User;