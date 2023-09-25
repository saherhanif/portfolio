import React from 'react'
import './index.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-sect social-icon width-50">
          <a href="https://twitter.com/hanif_saher">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/saher-hanif-162126258/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/saherhanif">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="footer-sect mt-20 width-50">CopyRight © 2023. All Rights Reserved</div>
      </div>
    </div>
  );
}
