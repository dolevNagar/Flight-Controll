import React from 'react'

export default function FlightList(props) {
    return (
        <div>
            {props.flightList.map((plain) => (
                <div>
                    <h3>Flight ID: {plain.id}</h3>
                    <p>Company: {`${plain.company}`}</p>
                    <p>Number Of Passengers: {plain.passengers}</p>
                </div>
            ))}
        </div>
    )
}
