import React, { useEffect, useState } from 'react'
import FlightList from './FlightList';
import { useNavigate } from 'react-router-dom';

export default function Sort(props) {
    const nav = (useNavigate);
    const [choose, setChoose] = useState('');
    
    const sortFlight = () => {
        if (choose == 'Low') {
            props.setFlightOrder([...props.plain].sort((a, b) => b.passengers - a.passengers));
        }
        else if (choose == 'High') {
            props.setFlightOrder([...props.plain].sort((a, b) => a.passengers - b.passengers));
        }
    }

    return (
        <div>
            <h1>Sort</h1>
            <FlightList flightList={props.flightOrder} />
            <input type="text" placeholder='By Company Name' /><br />
            <select onChange={(e) => { setChoose(e.target.value) }}>
                <option disabled>Choose</option>
                <option value={"Low"}>Low</option>
                <option value={"High"}>High</option>
            </select>
            <button onClick={()=>sortFlight()}>Sort</button>
        </div>
    )
}
