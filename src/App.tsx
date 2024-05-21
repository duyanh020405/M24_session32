import React from 'react'
import ClassComponent from './components/ClassComponent';
import Form from './components/Form';
import Bt1 from './components/Bt1';
import Bt3 from './components/Bt3';
import Bt4 from './components/Bt4';
import Bt5 from './components/Bt5';
import Bt6 from './components/Bt6';
import Bt7 from './components/Bt7';
import Bt8 from './components/Bt8';
import Bt10 from './components/Bt10';
import Bt9 from './components/Bt9';
import Bt11 from './components/Bt11';
export default function App() {
  // setTimeout(()=>{
  //   console.log("ham time out duoc goi");
  //  },5000)
  //  setInterval(()=>{
  //   console.log("show");
    
  //  },1000)
  //  let interval = setInterval(()=>{
  //   console.log("Ham interval duoc goi");
  
  //  },10000)
  //  const handleClick=()=>{
  //   clearInterval(interval)
  //  }

  return (
    <div>
      {/* <button onClick={handleClick}>Dung interval</button> */}
      <ClassComponent></ClassComponent>
      <Form></Form>
      <Bt1></Bt1>
      <Bt3></Bt3>
      <Bt4></Bt4>
      <Bt5></Bt5>
      <Bt6></Bt6>
      <Bt7></Bt7>
      <Bt8></Bt8>
      <Bt10></Bt10>
      <Bt9></Bt9>
      <Bt11></Bt11>
    </div>
  )
}
// => Khi viet ham setInterval va setTime nen viet trong component dismount