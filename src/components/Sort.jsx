import React, { useEffect, useState } from 'react';
import FlightList from './FlightList';
import { Link } from 'react-router-dom';

export default function Sort(props) {
    const [choose, setChoose] = useState('');

    const sortFlight = () => {
        if (choose === 'LowPassengers') {
            const sorted = [...props.plain].sort((a, b) => b.passengers - a.passengers);
            props.setPlain(sorted);
        } else if (choose === 'HighPassengers') {
            const sorted = [...props.plain].sort((a, b) => a.passengers - b.passengers);
            props.setPlain(sorted);
        } else if (choose === 'LowID') {
            const sorted = [...props.plain].sort((a, b) => b.id - a.id);
            props.setPlain(sorted);
        } else if (choose === 'HighID') {
            const sorted = [...props.plain].sort((a, b) => a.id - b.id);
            props.setPlain(sorted);
        }
    };

    return (
        <div>
            <h1>Sort</h1>
            <FlightList plain={props.plain} />
            <input type="text" placeholder="By Company Name" />
            <br />
            <select onChange={(e) => setChoose(e.target.value)}>
                <option disabled selected>Choose Order</option>
                <option value="LowPassengers">By Passengers - Low To High</option>
                <option value="HighPassengers">By Passengers - High To Low</option>
                <option value="LowID">By ID - Low To High</option>
                <option value="HighID">By ID - High To Low</option>
            </select>
            <button onClick={sortFlight}>Sort</button>
            <Link to={'/controlpanel'}><button>Back</button></Link>
        </div>
    );
}
