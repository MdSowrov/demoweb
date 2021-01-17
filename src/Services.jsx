import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import Hum from '../src/img/Hum.png';

function Services() {
    return (
        <>
              <div className="my-5">
                  <h2 className="text-center">Our Service</h2>
              </div>
              <div className='container-fluid mb-5' >
                <div className="row">
                <div className="col-10 mx-auto" >
                    <div className="row gy-3">
                        {
                            Sdata.map((val, ind)=>{
                                return(
                                    <Card
                                        key={ind} 
                                        title={val.title}
                                        subtitle='Some quick example text to build on the card title and make up the bulk of the card'
                                        visit='/'
                                        btn='Go somewhere' 
                                        imgsrc={Hum}
                                        />
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Services
