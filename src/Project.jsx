import React from 'react'
import project from './css/project.module.css'
import full_stack from '/public/Screenshot 2025-04-07 172228.png'
import portfolio from '/public/image.png'


const Project = () => {
  return (
    <>
    <div id="projects" className={project .p_main}>

      <div className={project .P_heading}>
        <h1>Project</h1>
      </div>
      <section className={project .p_parent}>
        <article className={project .p_art1}>

          <aside className={project .p_asd1}>
          <img src={full_stack} alt="" />
          <h1>Class-Aura</h1>
          <p>Developed Class Aura, a Student Management System using Django, Python, HTML, CSS, JavaScript, and SQLite with full CRUD operations, user authentication, and admin panel integration. Designed a responsive UI with search, filter, and input validation, strengthening my full-stack development skills and experience in scalable, user-friendly applications.</p>
          </aside>
        </article>

        <article className={project .p_art2}>
          <aside className={project .p_asd2}>
          <img src={portfolio} alt="" />
          <h1>Project-Aura</h1>
          <p>Developed a personal portfolio website using HTML, CSS, JavaScript,
             and React.js with a clean, responsive, and user-friendly design. Built using acomponent-based structure (Home, About, Projects, Contact, Footer, and Navbar) to showcase skills, projects, and technical expertise in an interactive way.</p>
          </aside>
        </article>
      </section>
      </div>
    </>
  )
}

export default Project
