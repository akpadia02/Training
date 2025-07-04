import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/message/message'

function App() {
  const [count, setCount] = useState(0)

  let msg1={msg:"Hey",from:"Your child",to:"GOD"}
  return (
    <>
       {/* <Message msg={100}/> error */}
       {/* <Message /> error */}
       <Message msgdetails={msg1}/>
    </>
  )
}

export default App
