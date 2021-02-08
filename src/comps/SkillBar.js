import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SkillBar = (props) => {

    const { title, titleCss } = props

    return (
        <div className={`skill-bar-ctn skill-bar-ctn-${titleCss}`}>
            <h3 className={`skill-bar-title skill-bar-title-${titleCss}`}>{title}</h3>

            <div className={`lvls-ctn lvl-ctn-${titleCss}`}>
                <div className={`lvl-ctn`}>
                    <div className={`lvl lvl-1 lvl-1-${titleCss}`}></div>
                </div>
                <div className={`lvl-ctn`}>
                    <div className={`lvl lvl-2 lvl-2-${titleCss}`}></div>
                </div>
                <div className={`lvl-ctn`}>
                    <div className={`lvl lvl-3 lvl-3-${titleCss}`}></div>
                </div>
                <div className={`lvl-ctn`}>
                    <div className={`lvl lvl-4 lvl-4-${titleCss}`}></div>
                </div>
                <div className={`lvl-ctn`}>
                    <div className={`lvl lvl-5 lvl-5-${titleCss}`}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillBar