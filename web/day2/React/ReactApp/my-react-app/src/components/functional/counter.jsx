// var Counter=()=>{
//     let count=100;
//     return(
//         <>
//         <p>Count: {count}</p>
//         <button className="btn btn-primary" onClick={()=>count++}>Count++</button> 
//         </>
//     )
// }
// export default Counter;
//not updated we need state

import { useState } from "react";


var Counter = () => {
    const [count, setCount] = useState(100);
    // const count=useState(100)[0];
    // count setCount=useState(100)[1];
    return (
        <>
            <p>Count: {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count+1)}>Count++</button>
        </>
    )
}
export default Counter;