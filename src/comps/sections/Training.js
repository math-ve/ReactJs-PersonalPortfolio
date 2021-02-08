import React, { useEffect } from 'react'
import { gsap } from "gsap"

const Training = (props) => {

    useEffect(() => {
        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.training-main-ctn',
                start: '-125 center',
            }
        })
        .from('.section-title-training', {x: -50, opacity: 0, duration: 1})
        .from('.title-border-training', {x: 50, opacity: 0, duration: 1}, "-=1")
        .from('.trainings-ctn .training-bg-ctn', {opacity: 0, y: 50, stagger: .5})
    }, [])

    return (
        <div className="training-main-ctn">
            <div className="section-title-ctn">
                <h3 className="section-title section-title-training">My training</h3>
                <div className="title-border title-border-training"></div>
            </div>

            <div className="trainings-ctn">
                <div className="training-bg-ctn training-1">
                    <div className="training-ctn">
                        <h5 className="training-year">2014-2015</h5>
                        <h5 className="training-subject">English Courses</h5>
                        <h4 className="training-place">Education First Miami</h4>
                        <p className="training-text">Gap year in Miami after high school to learn English.</p>
                    </div>
                </div>

                <div className="training-bg-ctn training-2">
                    <div className="training-ctn">
                        <h5 className="training-year">2018-20xx</h5>
                        <h5 className="training-subject">Solo learning</h5>
                        <h4 className="training-place">At home</h4>
                        <p className="training-text">I developed strong programming skills at home using online platforms such as Udemy, OpenClassroom or even Youtube. I practice a lot by creating personal projects and via freelances projects as well.</p>
                        <ul className="list">
                            <li className="list-item">HTML5 | CSS3</li>
                            <li className="list-item">JS6</li>
                            <li className="list-item">MySql</li>
                            <li className="list-item">React.js</li>
                            <li className="list-item">React Native</li>
                            <li className="list-item">Redux</li>
                            <li className="list-item">Firebase</li>
                            <li className="list-item">WordPress</li>
                        </ul>
                    </div>
                </div>

                <div className="training-bg-ctn training-3">
                    <div className="training-ctn">
                        <h5 className="training-year">2019-2021</h5>
                        <h5 className="training-subject">IT Engineer</h5>
                        <h4 className="training-place">19 Coding School</h4>
                        <p className="training-text">In addition to learning programming languages that I had never used before, 19 taught me to learn quickly and effectively on my own and within a team.</p>
                        <ul className="list">
                            <li className="list-item">C / C++</li>
                            <li className="list-item">ASM</li>
                            <li className="list-item">Git</li>
                            <li className="list-item">Docker</li>
                            <li className="list-item">Kubernetes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training