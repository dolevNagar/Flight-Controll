import React, { useState } from 'react'
import FlightList from './FlightList'
import { useNavigate } from 'react-router-dom';

export default function AddFlight(props) {
    const nav = useNavigate();
    const [id, setID] = useState();
    const [company, setCompany] = useState();
    const [passengers, setPassengers] = useState();

    const addFlight = () => {
        if (!((id.length > 5) || ((props.plain.find(plain => plain.id == id)) != null) ||
            ((!(!/[A-Z]/.test(company))) && (!(!/[a-z]]/.test(company)))) ||
            ((1 <= passengers) && (passengers <= 450))
        )) {
            alert("Not all Inputs are correct");
            return;
        }
        let temp = {
            id,
            company,
            passengers
        }
        const newPlain = [...props.plain, temp];
        props.setPlain(newPlain);
        nav('/controlpanel');
      }
      
    return (
        <div className='container'>
            <h2>Add Flight</h2>
            <input onChange={(e) => setID(Number(e.target.value))} type="number" placeholder='flight ID' /><br />
            <input onChange={(e) => setCompany(e.target.value)} type="text" placeholder='flight Company' /><br />
            <input onChange={(e) => setPassengers(Number(e.target.value))} type="number" placeholder='Passengers Number' /><br />
            <button onClick={addFlight}>Add</button>
        </div>
    )
}
