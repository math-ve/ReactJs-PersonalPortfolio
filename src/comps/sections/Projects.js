import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactSVG } from 'react-svg'

gsap.registerPlugin(ScrollTrigger)

const Projects = (props) => {

    useEffect(() => {
        gsap.set('.projects-main-ctn', {visibility: 'visible'})

        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-main-ctn',
                start: '-100 center',
            }
        })
        .from('.section-title-projects', {x: -50, opacity: 0, duration: 1})
        .from('.title-border-projects', {x: 50, opacity: 0, duration: 1}, "-=1")
        .from('.iwiish-title', {opacity: 0, duration: 1})
        .from('.iwiish-img-ctn', {opacity: 0, duration: 1, ease: 'back', stagger: .3})
        .from('.iwiish-text', {y: 50, opacity: 0, duration: 1, stagger: .3})
        .from('.iwiish-btn', {opacity: 0, duration: 1})
        .from('.projects-separator', {opacity: 0, duration: 1})
    },[])

    useEffect(() => {
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.projects-separator',
                start: '-100 center'
            }
        })
        .from('.projects-ctn .project-ctn', {opacity: 0, y: 50, duration: 1 ,stagger: .5})
    },[])

    return (
        <div className="projects-main-ctn">
            <div className="section-title-ctn">
                <h3 className="section-title section-title-projects">Some personal projects</h3>
                <div className="title-border title-border-projects"></div>
            </div>
            <div className="iwiish-ctn">
                <h4 className="iwiish-title">iWiish</h4>
                <div className="iwiish-imgs-ctn">
                    <div className="iwiish-img-ctn iwiish-img-1-ctn hvr-float-shadow">
                        <img src="/assets/iwiish_1.png" className="iwiish-img iwiish-img-1"/>
                    </div>
                    <div className="iwiish-img-ctn iwiish-img-2-ctn hvr-float-shadow">
                        <img src="/assets/iwiish_2.png" className="iwiish-img iwiish-img-1"/>       
                    </div>
                    <div className="iwiish-img-ctn iwiish-img-3-ctn hvr-float-shadow">
                        <img src="/assets/iwiish_3.png" className="iwiish-img iwiish-img-1"/>
                    </div>
                    <div className="iwiish-img-ctn iwiish-img-4-ctn hvr-float-shadow">
                        <img src="/assets/iwiish_4.png" className="iwiish-img iwiish-img-1"/>
                    </div>
                </div>

                <div className="iwiish-text-ctn">
                    <p className="iwiish-text iwiish-text-1">Certainly my « biggest » personal project to date. It is a mobile application intended to allow users to create and share wish lists.</p>
                    <p className="iwiish-text iwiish-text-2">This will be very different from other applications of the same type, it will be much more complete, by offering to make its wish lists public (visible to all) or private (protected by a password) for example. The application will offer a « mini social network » aspect a bit like an instagram for wish lists. It will therefore be possible to search for a user via his username and see his lists on his profile. Still many other small aspects will be to discover once it is released, because yes, it is still in development.</p>
                    <p className="iwiish-text iwiish-text-3">Once the application is finished, I would like to link to it a website, in the form of a webapp, which will include all the content of the application to allow users without an account to still have access to the lists of his friends, etc …</p>
                    <p className="iwiish-text iwiish-text-4">I am developing this application in <span className="bold">React-Native</span>. All the Backend aspect is centralized on <span className="bold">Firebase</span> (authentication, database, photo storage, analytics, …)</p>
                </div>

                <a href="https://github.com/math-ve/ReactNativeJs-iWiish" target="_blank" style={{textDecoration: 'none'}}>
                    <div className="iwiish-btn hvr-float-shadow">
                        <p className="iwiish-btn-text">See on GitHub</p>
                        <ReactSVG src="/assets/svg/github_pink.svg" />
                    </div>
                </a>
            </div>

            <div className="projects-separator"></div>

            <div className="projects-ctn">
                <div className="project-ctn project-1-ctn">
                    <h3 className="project-title project-1-title">Tml-History</h3>
                    <div className="project-img-ctn project-1-img-ctn hvr-float-shadow">
                        <img className="project-img project-1-img" src="/assets/tml-history.png"/>
                    </div>
                    <p className="project-text project-text-1">Fansite of the Tomorrowland music festival of which I am a huge fan.</p>
                    <div className="project-btns-ctn project-1-btns-ctn">
                        <a href="https://tml-history.netlify.app/" target="_blank">
                            <div className="project-link-btn project-1-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/link.svg" />
                            </div>
                        </a>
                        <a href="https://github.com/math-ve/ReactJs-TomorrowlandHistory" target="_blank">
                            <div className="project-github-btn github-1-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/github_2.svg" />
                            </div>                            
                        </a>          
                    </div>
                </div>

                <div className="project-ctn project-2-ctn">
                    <h3 className="project-title project-2-title">The Movie Database</h3>
                    <div className="project-img-ctn project-2-img-ctn hvr-float-shadow">
                        <img className="project-img project-2-img" src="/assets/dmoviedb.png"/>
                    </div>
                    <p className="project-text project-text-2">Just a simple project to show my ability to use external API.</p>
                    <div className="project-btns-ctn project-2-btns-ctn">
                        <a href="https://dmoviedb.netlify.app" target="_blank">
                            <div className="project-link-btn project-2-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/link.svg" />
                            </div>
                        </a>
                        <a href="https://github.com/math-ve/ReactJs-MovieDb" target="_blank">
                            <div className="project-github-btn github-2-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/github_2.svg" />
                            </div>                            
                        </a>          
                    </div>
                </div>

                <div className="project-ctn project-2-ctn">
                    <h3 className="project-title project-2-title">Photographer portfolio</h3>
                    <div className="project-img-ctn project-2-img-ctn hvr-float-shadow">
                        <img className="project-img project-2-img" src="/assets/portfolio-theo.png"/>
                    </div>
                    <p className="project-text project-text-2">Little website I made for a friend to present his stunning pictures.</p>
                    <div className="project-btns-ctn project-2-btns-ctn">
                        <a href="https://theo-portfolio.netlify.app" target="_blank">
                            <div className="project-link-btn project-2-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/link.svg" />
                            </div>
                        </a>
                        <a href="https://github.com/math-ve/ReactJs-PhotographerPortfolio" target="_blank">
                            <div className="project-github-btn github-1-link-btn hvr-float-shadow">
                                <ReactSVG src="/assets/svg/github_2.svg" />
                            </div>                            
                        </a>          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects