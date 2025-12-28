import React, {useState, useEffect} from "react";

const MySecondComponent = () => {
    
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `Count ${count}`;
    },[count]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>subtract</button>
        </>
    )

    
}

export default MySecondComponent


