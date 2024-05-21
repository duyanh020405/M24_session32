import React, { useState } from 'react'

export default function Bt6() {
    const  [name , setName]=useState<string>('') 
    const  [email,setEmail]=useState<string>('')
    const [password,setPass]=useState<string>('')
    const [check,setCheck]=useState<string>('')
const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  if(check === password){
    let user ={
      name,
      email,
      password,
    }
    console.log(user);

  }
  else{
    alert("check mk khac nhau")
    return
  }
  

}
  return (
    <div>
      <h4>Bai 6</h4>
        <h4>Them moi tai khoan </h4>
        <form onSubmit={handleSubmit} style={{color:"white",flexDirection:"column",display:"flex",border:"1px solid white",}} >
           <input type="text" onChange={(e)=>setName(e.target.value)}  required />
           <input type="text" onChange={(e)=>setEmail(e.target.value)} required />
           <input type="password" onChange={(e)=>setPass(e.target.value)}  required />

           <input type="password" onChange={(e)=>setCheck(e.target.value)} required/>
           <button type='submit'>Check</button>
        </form>
    </div>
  )
}


