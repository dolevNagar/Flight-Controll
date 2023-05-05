import React, { useState } from 'react'
import FlightList from './FlightList'
import { useNavigate } from 'react-router-dom';

export default function Delete(props) {
    const nav = useNavigate();
    const [id, setID] = useState();
    const deleteFlight = () => {
        if (props.plain.find((plain) => plain.id == id) == undefined) {
            alert("Flight Not Found");
            return;
        }
        props.setPlain((props.plain.filter(selectedPlain => selectedPlain.id != id)));
        nav('/controlpanel');
    }
    return (
        <div>
            <h2>Delete</h2>
            <input onChange={(e) => setID(e.target.value)} type='number' placeholder='Flight Number' />
            <button onClick={()=>deleteFlight()}>Delete</button>
        </div>
    )
}
