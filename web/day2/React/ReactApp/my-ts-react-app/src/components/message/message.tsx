

// const Message: FC=()=>{
//     return <h1>hello!</h1>;
// }

import type { FC } from "react";

// type MessageType={
//     msg:string;
// }
// const Message:FC<MessageType>=(props:MessageType)=>{
//     return <h1>{props.msg}</h1>;
// }

type MessageModel={
    msg:string;
    from:string;
    to:string;
}
type MessageType={
    msgdetails:MessageModel;
}
const Message:FC<MessageType>=(props:MessageType)=>{
    return (
        <>
        <h1>{props.msgdetails.msg}</h1>
        <h1>From: {props.msgdetails.from}{" "}To: {props.msgdetails.to}</h1>
        </>
    )
}


export default Message;