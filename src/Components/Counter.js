import { Component } from "react";

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  decrement(){
    this.setState({
      counter:this.state.counter-1
    })
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.increment()}>INCREASE</button>
        <h3>The total number of people are: {this.state.counter}</h3>
        <button onClick={()=>this.decrement()}>DECREASE</button>
      </div>
    )
  }
}
export default Counter;