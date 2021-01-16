import React, { useState } from 'react'

function Contact() {

const [data, setData] = useState({
    fullname:'',
    email:'',
    phone:'',
    msg:''
})

const inputEvent = (event)=>{
    const {name, value} = event.target;
    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value
        }
    })

}

const formSubmit = (e)=>{
    e.preventDefault();
    alert(`This is My Name: ${data.fullname}. My Email Address ${data.email}. Phone No ${data.phone}. And Finally what are you saying text me ${data.msg} `)
}


    return (
        <>
         <div className="my-5">
             <h2 className="text-center">Contact Us</h2>
         </div>
         <div className="container contact_div">
             <div className="row">
                 <div className="col-md-6 col-10 mx-auto">
               
                     <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" name='fullname' value={data.fullname} onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" name='email' value={data.email} onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Phone</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" name='phone' value={data.phone} onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name='msg' value={data.msg} onChange={inputEvent}></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                  
                 </div>
             </div>
         </div> 
        </>
    )
}

export default Contact
