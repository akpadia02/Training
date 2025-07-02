//create a message component that displays hello in h1 tag
import React from 'react'
import './App.css'

class Message extends React.Component{
  render(){
    return (
        <div>
            <h1>{this.props.msg}</h1>
            <p>{this.props.to} {this.props.from}</p>

            <h1>{this.props.msgdetails.msg}</h1>
            <p>To: {this.props.msgdetails.to} From:{this.props.msgdetails.from}</p>
        </div>
    ) //making dynamic
  }
}

export default Message;