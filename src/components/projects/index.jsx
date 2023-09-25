import React from 'react'
import './index.css'

export default function Projects() {
  
  return (
    <section id='projects'>
      <div className='projectsHeader'>
      <h1>PROJECTS AND EXPERIENCE</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda</p>
      </div>
      
      <div className="timeline">
      <div className="outer">
      <div className="card">
      <div className="info">
        <h3 className="title">HEKMA HIGHSCHOOL</h3>
        <h4>MATHMATICS TUTOR</h4>
        <h4>01/2019 - 01/2020</h4>
        <br/>
        <p>Taught groups of high schoolers the required mathematical material for five units of Bagrut.</p>
      </div>
    </div>
   
    
    <div className="card">
      <div className="info">
        <h3 className="title">Amdocs</h3>
        <h4>FULL-STACK DEVELOPER </h4>
        <h4>09/2022 - 03/2023</h4><br/>
        <p>Worked in collaboration with Amdocs development team to implement a cloud-based system that integrates with Jira for micro-level capacity tracking to bring more accuracy for future project iteration planning.</p><br/> 
        <p>front-end:  <a href="https://github.com/saherhanif/caps-look">source code</a></p>
        <p>back-end:  <a href="https://github.com/saherhanif/caps-look-api">source code</a></p>
       
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">WebAheadForce</h3>
        <h4>FULL-STACK DEVELOPER </h4>
        <h4>02/2023 - 06/2023</h4><br/>
        <p>Designed and developed a professional website for a tennis instructor, showcasing his expertise and business information.</p><br/>
        <p><a href="https://github.com/saherhanif/oncourt-client">source code</a></p>
          
      </div>
    </div>

   
  </div>
</div>

    </section>
  )
}
