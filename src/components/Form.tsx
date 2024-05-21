import React, { useState } from 'react'

export default function Form() {
    const handleClick=()=>{
        console.log("ok")
    }
    const [name,setName]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("thay doi");
        console.log("gia tri nguoi dung nhap",e.target.value)
        setName(e.target.value);
    }
    const emailChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
  return (
    <div>
      {
        /*
        Các kĩ thuật xử lí trong form
        có 2 kỹ thuật xử lí chính
        1.controler
         - lấy dữ liệu người dùng nhập vào đâu
         - lấy dữ liệu khi người dùng nhập vào ô textarea
         - chọn select option 
        */
      }
      <label htmlFor="">Ten {name}</label>

      <input 
         onChange={handleChange}
         type="text"
       />
       <input 
       onChange={emailChange}
          type="text" 
        />
       <p>Email nguoi dung nhap :</p>
       <p>{email}</p>
       <button onClick={handleClick}>login</button>+
    </div>
  )
}
