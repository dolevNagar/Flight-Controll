import React from 'react'

export default function FlightList(props) {
    return (
        <div>
            <h1>Flight List</h1>
            <div id='flightList'>
                {props.plain.map((plain) => (
                    <div id='flightDiv'>
                        <h3>Flight ID: {plain.id}</h3>
                        <p>Company: {`${plain.company}`}</p>
                        <p>Number Of Passengers: {plain.passengers}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
