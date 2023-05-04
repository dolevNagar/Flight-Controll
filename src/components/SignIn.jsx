import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignIn(props) {
    const [code,setCode] = useState('');
    const nav = useNavigate();

    const checkEntary = () =>{
        if (code.length != 5) {
            alert("Wrong Entery Code");
            return;
        }
        nav('/controlpanel');
    }
  return (
    <div>
        <h2>Sign In</h2>
        <input onChange={(e)=> setCode(e.target.value)} type='number' placeholder='Entery Code' /><br />
        <button onClick={checkEntary}>Enter</button>
    </div>
  )
}
