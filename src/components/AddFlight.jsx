import React, { useState } from 'react'
import FlightList from './FlightList'
import { useNavigate } from 'react-router-dom';

export default function AddFlight(props) {
    const nav = useNavigate();
    const [id, setID] = useState('');
    const [company, setCompany] = useState();
    const [passengers, setPassengers] = useState();

    const addFlight = () => {
        console.log(id.length > 5);
        console.log(!(!/[A-Z]/.test(company)));
        console.log(!(!/[a-z]]/.test(company)));
        console.log(passengers);
        if (!((id.length > 5) ||
            ((!(!/[A-Z]/.test(company))) && (!(!/[a-z]]/.test(company)))) ||
            ((1 <= passengers) && (passengers <= 450))
        )){
            alert("Not all Inputs are correct");
            return;
        }
        let temp = {
            id,
            company,
            passengers
        }
        props.plain.push(temp);
        nav('/controlpanel');
    }
    return (
        <div className='container'>
            <h2>Add Flight</h2>
            {/* <FlightList plain={props.plain} /> */}
            <input onChange={(e) => setID(e.target.value)} type="number" placeholder='flight ID' /><br />
            <input onChange={(e) => setCompany(e.target.value)} type="text" placeholder='flight Company' /><br />
            <input onChange={(e) => setPassengers(e.target.value)} type="number" placeholder='Passengers Number' /><br />
            <button onClick={addFlight}>Add</button>
        </div>
    )
}
