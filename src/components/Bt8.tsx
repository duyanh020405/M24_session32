import React, { useState } from 'react'
const boi="Boi"
const code=", code"
const bong=", bong"
const other=", other"
export default function Bt8() {
    
       const [work , setWork]=useState<string[]>([])
       const push =(e:React.ChangeEvent<HTMLInputElement>)=>{
        let hi = e.target.value
        
        setWork([...work,hi])
        for(let i = 0 ; i < work.length ; i++){
            if(work[i]===hi){
                setWork(prevWork => prevWork.filter(item => item !== hi))
            }
        }
       }
  return (
    <div>
      <form>
        <h4>Bai 8</h4>
        <p>hoat dong :{work}</p>
        <p><input type="checkbox" name='favorite' onChange={push} value={boi}/>Swimming</p>
        <p><input type="checkbox" name='favorite' onChange={push} value={bong}/>Football</p>
        <p><input type="checkbox" name='favorite' onChange={push} value={code}/>Code</p>
        <p><input type="checkbox" name='favorite' onChange={push} value={other}/>Other</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
