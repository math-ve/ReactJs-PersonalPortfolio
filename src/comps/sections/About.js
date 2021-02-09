import React, { useEffect } from 'react'
import { gsap } from "gsap";

const About = (props) => {

    useEffect(() => {
        gsap.set('.about-main-ctn', {visibility: 'visible'})
        gsap.set('.socials-ctn', {visibility: 'visible'})

        var tl1 = gsap.timeline()
            .from('.bg-circle-1', 6, {bottom: '-400px', right: '-100px', ease: 'expo', opacity: 0, scale: 2})
            .from('.bg-circle-2', 4.5, {top: '0px', left: '-500px', ease: 'expo', opacity: 0, scale: 2}, "-=6")
            .from('.about-img', 1.5, {opacity: 0, scale: 1.2}, "-=6")
            .from('.about-text-ctn h3, .about-text-ctn h1', 1,{opacity: 0, y: 100, stagger: .2}, "-=5")
            .from('.about-btns-ctn a', 1,{opacity: 0, y: 100, stagger: .2}, "-=4.4")
            .from('.about-cover-ctn', 1, {opacity: 0, y: 100}, "-=3")
            .from('.socials-ctn', 1, {x:'100%'}, "-=2")
    }, [])

    return (
        <div className="about-main-ctn">

            <div className="about-left-ctn">
                <div className="about-text-ctn">
                    <h3 className="about-text-1"><span className="pink-txt">Hello</span>, I'm Mathieu Van Eynde</h3>
                    <h1 className="about-text-2">19 coding School student</h1>
                </div>
                <div className="about-btns-ctn">
                    <a href="mailto:mathieu.vaneynde@gmail.com" style={{textDecoration: 'none'}}>
                        <div className="contact-btn hvr-float-shadow">
                            <p className="contact-btn-txt">Contact me</p>
                        </div>                        
                    </a>
                    <a href="/assets/CV_Mathieu_VanEynde.pdf" download>
                        <div className="cv-btn hvr-float-shadow">
                            <p className="cv-btn-txt">Get CV</p>
                        </div>                    
                    </a>
                </div>                
            </div>

            <div className="about-right-ctn">
                <div className="about-img-ctn">
                    <div className="bg-circle-1"></div>
                    <div className="bg-circle-2"></div>
                    <img className="about-img" src="/assets/me.png"/>                
                </div>
            </div>

            <div className="about-cover-ctn">
                <h3 className="about-cover-title">ABOUT</h3>
                <p className="about-cover-text">I have been passionate about programming for three years now, I love bringing my projects to life using code. Always looking for new challenges, I enrolled in school 19 where I learned to learn quickly, to work in a team and to be autonomous. I am now again looking for new challenges to continue to evolve in an environment that will allow me to put my skills into practice. <br/>My favorite fields are mobile development and web development.</p>
            </div>
        </div>
    )
}

export default About