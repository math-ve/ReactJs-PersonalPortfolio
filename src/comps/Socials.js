import React from 'react'
import { ReactSVG } from 'react-svg'

const Socials = (props) => {
    return (
        <div className="socials-ctn">
            <a href="https://www.linkedin.com/in/mathieuvaneynde/" target="_blank">
                <div className="linkedin-svg-ctn hvr-float-shadow">
                    <ReactSVG src="/assets/svg/linkedin.svg"/>
                </div>                
            </a>

            <a href="https://github.com/math-ve?tab=repositories" target="_blank">
                <div className="github-svg-ctn hvr-float-shadow">
                    <ReactSVG src="/assets/svg/github.svg"/>
                </div>                
            </a>
        </div>
    )
}

export default Socials