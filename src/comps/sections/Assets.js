import React, { useEffect } from 'react'
import { gsap } from "gsap"

const Assets = (props) => {

    useEffect(() => {
        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.assets-main-ctn',
                start: '-125 center',
            }
        })
        .from('.section-title-assets', {x: -50, opacity: 0, duration: 1})
        .from('.title-border-assets', {x: 50, opacity: 0, duration: 1}, "-=1")
        .from('.assets-ctn .assets-bg-ctn', {opacity: 0, y: 50, stagger: .5})
    }, [])

    return (
        <div className="assets-main-ctn">
            <div className="section-title-ctn">
                <h3 className="section-title section-title-assets">My assets</h3>
                <div className="title-border title-border-assets"></div>
            </div>

            <div className="assets-ctn">
                <div className="assets-bg-ctn">
                    <div className="assets-soft-skills-ctn">
                        <h3 className="assets-title">Soft Skills</h3>
                        <div className="soft-skills-ctn">
                            <p className="soft-skill">Autonomous</p>
                            <p className="soft-skill">fast learner</p>
                            <p className="soft-skill">Sociable</p>
                            <p className="soft-skill">Dynamic</p>
                            <p className="soft-skill">Positive</p>
                            <p className="soft-skill">Trustworthy</p>
                        </div>
                    </div>
                </div>

                <div className="assets-bg-ctn">
                    <div className="assets-languages-ctn">
                        <h3 className="assets-title">Languages</h3>
                        <div className="languages-ctn">
                            <p className="language">French : Native</p>
                            <p className="language">English : C.2</p>
                            <p className="language">Dutch : B.2</p>
                            <p className="language">Spanish : A.2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets