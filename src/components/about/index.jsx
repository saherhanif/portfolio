import React from 'react'
import './index.css'

export default function About() {
  return (
    <section id="about">
    <div class="about container">
      <div class="service-top">
        <h1 class="section-title">ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
          magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
          voluptatum explicabo!</p>
      </div>
      <div class="service-bottom">
        <div class="service-item item1">
          <div class="icon"><img src="https://img.icons8.com/bubbles/64/000000/services.png"/></div>
          <h2>Front End Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
            magni et, doloribus quod voluptate </p>
        </div>
        <div class="service-item item2">
          <div class="icon"><img src="https://img.icons8.com/fluency/64/null/backend-development.png"/></div>
          <h2>Back End Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
            magni et, doloribus quod voluptate </p>
        </div>
        <div class="service-item item3">
          <div class="icon"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-full-stack-computer-programming-flaticons-flat-flat-icons-2.png"/></div>
          <h2>Full Stack Engineer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
            magni et, doloribus quod voluptate </p>
        </div>
      </div>
    </div>
  </section>
  )
}
