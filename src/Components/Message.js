import {Component}from "react";
const displayMessage=()=>{
    return "Hello from displayMessage"
}
class Message extends Component{
    render(){
        return <div className="message">
            <h3>{this.props.messageContent}</h3>
            <h2>{displayMessage()}</h2>
        </div>
    }
}
export default Message