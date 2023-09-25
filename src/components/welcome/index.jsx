import React from 'react'
import'./index.css'
import myProfilePic from './profilepic.jpg'
import resumePDF from './SaherHanifResume.pdf';

export default function Welcome() {
  return (
    <section class="section" id="home">
      <div class="section__container">
        <div class="content">
          <p class="subtitle">HELLO</p>
          <h1 class="title">
            I'm <span>Saher<br />a</span> Web Developer
          </h1>
          <p class="description">
            Welcome to my web developer portfolio! I'm Saher, a skilled and
            creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I've worked on a variety of
            web projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <div class="action__btns">
            <a href='#contact'><button class="hire__me">Hire Me</button></a>
            <a href={resumePDF} download="Saher_Hanif_Resume.pdf">
            <button class="portfolio">Resume</button> 
            </a>
          </div>
        </div>
        <div class="image">
          <img src={myProfilePic} alt="profile" />
        </div>
      </div>
    </section>
  )
}
