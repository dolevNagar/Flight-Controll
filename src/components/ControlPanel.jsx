import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FlightList from './FlightList'

export default function ControlPanel(props) {
    const [flightList, setFlightList] = useState();

    return (
        <div>
            <h2>Control Panel</h2>
            <FlightList flightList={props.plain} />
            <Link to={'/controlpanel/sort'}><button>Sort</button></Link>
            <Link to={'/controlpanel/add'}><button>Add</button></Link>
            <Link to={'/controlpanel/delete'}><button>Remove</button></Link>
        </div>
    )
}
