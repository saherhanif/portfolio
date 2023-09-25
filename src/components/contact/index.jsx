import React from 'react'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';


export default function Contact() {
  return (
    <div className="main-section contact bg-lightgrey">
      <div className="container">
        <h1 className="heading-text">GET IN TOUCH</h1><br/>
        <div className="width-100">
          <form>
            <input type="text" placeholder="Full Name..." />
            <input type="text" placeholder="Full Email Id..." />
            <input type="text" placeholder="Full Mobile No..." />
            <textarea placeholder="Enter Address..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='myInfo'>
        <div className="width-33">
          <h3>
            <i className="fa fa-map-marker" style={{ color: '#4863ef' }}></i>
          </h3>
          <h4>Address</h4>
          <p>Haifa, Israel</p>
        </div>
        <div className="width-33">
          <h3>
            <i className="fa fa-phone" style={{ color: '#4863ef' }}></i>
          </h3>
          <h4>Phone</h4>
          <p>+972502700136</p>
        </div>
        <div className="width-33">
          <h3>
            <i className="fa fa-envelope-o" style={{ color: '#4863ef' }}></i>
          </h3>
          <h4>Email</h4>
          <p>saher.ha97@gmail.com</p>
        </div>
        </div>
      </div>
    </div>
  )
}
