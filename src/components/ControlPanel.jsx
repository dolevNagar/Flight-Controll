import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FlightList from './FlightList'

export default function ControlPanel(props) {

    return (
        <div className='container'>
            <h2>Control Panel</h2>
                <Link to={'/controlpanel/sort'}><button>Sort</button></Link>
                <br />
                <Link to={'/controlpanel/add'}><button>Add</button></Link>
                <br />
                <Link to={'/controlpanel/delete'}><button>Remove</button></Link>
        </div>
    )
}
