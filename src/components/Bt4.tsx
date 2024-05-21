import React, { useState } from 'react'

export default function Bt4() {
    const [input,setInput]=useState<string>("")
    const change =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }
  return (
    <div>
      <h4>Bai 4</h4>
      <p>Tien do hoan thanh cong viec : {input} %</p>
      <input type="range" onChange={change}/>
    </div>
  )
}
