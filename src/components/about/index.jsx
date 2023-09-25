import React from 'react'
import './index.css'

export default function About() {
  return (
    <section id="about">
    <div class="about container">
      <div class="service-top">
        <h1 class="section-title">ABOUT ME</h1>
        <p>Motivated junior full-stack developer with a year of experience and a strong foundation in various frameworks, seeking an entry-level position to apply skills, learn and grow .</p>
      </div>
      <div class="service-bottom">
        <div class="service-item item1">
          <div class="icon"><img src="https://img.icons8.com/bubbles/64/000000/services.png" alt='frontEnd'/></div>
          <h2>Front End Developer</h2>
          <p>As a front-end developer, I've worked on diverse projects, excelling in JavaScript, CSS, React, TypeScript, and SCSS. My passion lies in crafting user-friendly interfaces and pushing the boundaries of web development.</p>
        </div>
        <div class="service-item item2">
          <div class="icon"><img src="https://img.icons8.com/fluency/64/null/backend-development.png" alt='backEnd'/></div>
          <h2>Back End Developer</h2>
          <p>As a back-end developer, I've tackled a range of projects, specializing in Node.js, PostgreSQL, MongoDB, and TypeScript. My focus is on building robust server-side solutions, ensuring data integrity, and optimizing performance to create scalable and efficient applications.</p>
        </div>
        <div class="service-item item3">
          <div class="icon"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-full-stack-computer-programming-flaticons-flat-flat-icons-2.png" alt='full-stack'/></div>
          <h2>Full Stack Engineer</h2>
          <p>As a full-stack engineer, I've designed and implemented end-to-end projects, seamlessly bridging front-end and back-end technologies. I bring a holistic approach to crafting responsive and data-driven web applications. </p>
        </div>
      </div>
    </div>
  </section>
  )
}
