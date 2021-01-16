import React from 'react'
import { NavLink } from 'react-router-dom'

function Common(props) {
    return (
        <>
        <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg' >
            <div className="row">
              <div className="col-10 mx-auto" >
                  <div className="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                    <h1>
                        {props.title} <strong>Sowrov Ali</strong>
                    </h1>
                    <h5 className='my-5'>
                        {props.subtitle}
                    </h5>
                    <div className="mt-3">
                        <NavLink to={props.visite} className='btn-get-started'>{props.btnName}</NavLink>
                    </div>
                </div>
                <div className='col-md-6 order-1 order-lg-2 header-img'>
                    <img src='img/Hum.png' alt="header_img" className="img-fluid animated"/>
                </div>
                </div>
              </div>
            </div>
        </div>
        </section>
                </>
    )
}

export default Common
