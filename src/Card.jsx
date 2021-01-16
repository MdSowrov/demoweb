import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.subtitle}</p>
                        <NavLink to={props.visit} class="btn btn-primary">{props.btn}</NavLink>
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Card
