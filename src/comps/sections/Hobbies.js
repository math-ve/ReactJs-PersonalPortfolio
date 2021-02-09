import React, { useEffect } from 'react'
import { gsap } from "gsap"

const Hobbies = (props) => {

    useEffect(() => {
        gsap.set('.hobbies-main-ctn', {visibility: 'visible'})

        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.hobbies-main-ctn',
                start: '-250 center',
            }
        })
        .from('.section-title-hobbies', {x: -50, opacity: 0, duration: 1})
        .from('.title-border-hobbies', {x: 50, opacity: 0, duration: 1}, "-=1")
        .from('.hobbies-bg-ctn', {opacity: 0, y: 50, stagger: .5})        
    }, [])

    return (
        <div className="hobbies-main-ctn">
            <div className="section-title-ctn">
                <h3 className="section-title section-title-hobbies">My (others) interests &#38; Hobbies</h3>
                <div className="title-border title-border-hobbies"></div>
            </div>

            <div className="hobbies-bg-ctn">
                <div className="hobbies-ctn">
                    <p className="hobby">Reading</p>
                    <p className="hobby">Play piano</p>
                    <p className="hobby">Entrepreneurship</p>
                    <p className="hobby">Play tennis</p>
                    <p className="hobby">Psychology</p>
                    <p className="hobby">Music (Electronic)</p>
                </div>
            </div>
        </div>
    )
}

export default Hobbies