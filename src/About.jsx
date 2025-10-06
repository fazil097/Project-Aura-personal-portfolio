import React from 'react'
import about from './css/about.module.css'
import photo from '/public/photo2.jpg'


const About = () => {

  let download = ()=>{
    const link = document.createElement("a");
    link.href = '/public/Mohamed Fazil.A(Full-stack)-1.pdf'
    link.download = '/public/Mohamed Fazil.A(Full-stack)-1.pdf'
    link.click();
  }

  return (
    <>
      <div id="about" className={about .main1}>

        <section className={about .sec1}>
        <h1>About</h1>
        </section>

        <section className={about .sec2}>
            <article className={about .art1}>
            <img src={photo} alt="" height={'200px'}/>
            </article>
           
            <article className={about .art2}>
                <h1>Hello</h1>
                <h2>I'm Mohamed Fazil</h2>
                <p> A <b>Full Stack Developer and recent BCA graduate
                    from Mohamed Sathak College of Arts and Science, affiliated with the
                    University of Madras.</b>b I specialize in building responsive web
                    applications using <b> HTML, CSS, JavaScript, Python, and Django, with a
                    focus on clean code, scalable REST APIs, and SQL-based data handling.</b>
                    I'm continuously improving my backend knowledge, including Django
                    authentication, REST API development, and template rendering, while
                    strengthening my problem-solving and communication skills.
                    For my final year project, <b>I developed Class-Aura, a Student
                    Management System with full CRUD functionality, user authentication,
                    and an intuitive admin interface, built using Django.</b></p>

                    <button onClick={download}>Download Resume</button>   
            </article>
        </section>
      </div>
    </>
  )
}

export default About
