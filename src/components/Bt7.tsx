import React, { useState } from 'react';

const male = "male";
const female = "female";
const other = "other";

export default function Bt7() {
  const [sex, setSex] = useState('');

  const handleRadioChange = (event:any) => {
    setSex(event.target.value);
  };

  
  return (
    <div>
      <h4>Bai 7</h4>
      <form>
        <p>Sex: {sex}</p>
        <p><input type="radio" id="Male" value={male} name="sex" onChange={handleRadioChange}/>Male</p>
        <p><input type="radio" id="Female" value={female} name="sex" onChange={handleRadioChange}/>Female</p>
        <p><input type="radio" id="Other" value={other} name="sex" onChange={handleRadioChange}/>Other</p>
      </form>
    </div>
  );
}
