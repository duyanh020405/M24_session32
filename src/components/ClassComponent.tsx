import React, { Component } from 'react'
interface Props{
}
interface State{
    count:number
    
}
let interval:any
export default class ClassComponent extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        // khoi tao state
        this.state={
            count:0,
           
        }
    }
    // componentDidMount(): void {
    //     interval = setInterval(()=>{
    //         console.log("Ham interval duoc goi");
            
    //     },1000)
    // }
    stopInterval =()=>{
        clearInterval(interval)
    }
  render() {
    return (
      <div>
       <h4>ClassComponent</h4>
        <button onClick={this.stopInterval}>dung lai thoi </button>
      </div>
    )
  }
}
