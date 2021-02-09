import React, { useEffect } from 'react'
import SkillBar from '../SkillBar'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Skills = (props) => {

    var tl_html = gsap.timeline({paused: true})
    var tl_css = gsap.timeline({paused: true})
    var tl_js = gsap.timeline({paused: true})
    var tl_react = gsap.timeline({paused: true})
    var tl_reactnative = gsap.timeline({paused: true})
    var tl_redux = gsap.timeline({paused: true})
    var tl_node = gsap.timeline({paused: true})
    var tl_c = gsap.timeline({paused: true})
    var tl_mysql = gsap.timeline({paused: true})
    var tl_wordpress = gsap.timeline({paused: true})
    var tl_firebase = gsap.timeline({paused: true})
    var tl_php = gsap.timeline({paused: true})

    useEffect(() => {
        gsap.set('.skills-main-ctn' , {visibility: 'visible'})

        var tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.skills-main-ctn',
                start: '-125 center',
            }
        })
        .from('.section-title-skills', {x: -50, opacity: 0, duration: 1})
        .from('.title-border-skills', {x: 50, opacity: 0, duration: 1}, "-=1")
        .from('.skills-ctn', {opacity: 0, y: 50})
        .from('.skills-text', {opacity: 0})
    }, [])

    useEffect(() => {
        tl_html
            .to('.lvl-1-html', {width: '100%', duration: .75})
            .to('.lvl-2-html', {width: '100%', duration: .75})
            .to('.lvl-3-html', {width: '100%', duration: .75})
            .to('.lvl-4-html', {width: '100%', duration: .75})
        tl_css
            .to('.lvl-1-css', {width: '100%', duration: .75})
            .to('.lvl-2-css', {width: '100%', duration: .75})
            .to('.lvl-3-css', {width: '100%', duration: .75})
            .to('.lvl-4-css', {width: '100%', duration: .75})
        tl_js
            .to('.lvl-1-js', {width: '100%', duration: .75})
            .to('.lvl-2-js', {width: '100%', duration: .75})
            .to('.lvl-3-js', {width: '100%', duration: .75})
            .to('.lvl-4-js', {width: '100%', duration: .75})
        tl_react
            .to('.lvl-1-react', {width: '100%', duration: .75})
            .to('.lvl-2-react', {width: '100%', duration: .75})
            .to('.lvl-3-react', {width: '100%', duration: .75})
            .to('.lvl-4-react', {width: '100%', duration: .75})
        tl_reactnative
            .to('.lvl-1-react-native', {width: '100%', duration: .75})
            .to('.lvl-2-react-native', {width: '100%', duration: .75})
            .to('.lvl-3-react-native', {width: '100%', duration: .75})
            .to('.lvl-4-react-native', {width: '100%', duration: .75})
        tl_redux
            .to('.lvl-1-redux', {width: '100%', duration: .75})
            .to('.lvl-2-redux', {width: '100%', duration: .75})
            .to('.lvl-3-redux', {width: '100%', duration: .75})
            .to('.lvl-4-redux', {width: '100%', duration: .75})
        tl_node
            .to('.lvl-1-node', {width: '100%', duration: .75})
            .to('.lvl-2-node', {width: '100%', duration: .75})
            .to('.lvl-3-node', {width: '100%', duration: .75})
        tl_c
            .to('.lvl-1-c', {width: '100%', duration: .75})
            .to('.lvl-2-c', {width: '100%', duration: .75})
            .to('.lvl-3-c', {width: '100%', duration: .75})
        tl_mysql
            .to('.lvl-1-mysql', {width: '100%', duration: .75})
            .to('.lvl-2-mysql', {width: '100%', duration: .75})
            .to('.lvl-3-mysql', {width: '100%', duration: .75})
        tl_wordpress
            .to('.lvl-1-wordpress', {width: '100%', duration: .75})
            .to('.lvl-2-wordpress', {width: '100%', duration: .75})
            .to('.lvl-3-wordpress', {width: '100%', duration: .75})
            .to('.lvl-4-wordpress', {width: '100%', duration: .75})
        tl_firebase
            .to('.lvl-1-firebase', {width: '100%', duration: .75})
            .to('.lvl-2-firebase', {width: '100%', duration: .75})
            .to('.lvl-3-firebase', {width: '100%', duration: .75})
            .to('.lvl-4-firebase', {width: '100%', duration: .75})
        tl_php
            .to('.lvl-1-php', {width: '100%', duration: .75})
            .to('.lvl-2-php', {width: '100%', duration: .75})
    }, [])

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.skills-main-ctn',
            start: '100 center',
            onEnter: () => startAnim()
        })
    }, [])

    const startAnim = () => {
        tl_html.play()
        tl_css.play()
        tl_js.play()
        tl_react.play()
        tl_reactnative.play()
        tl_redux.play()
        tl_node.play()
        tl_c.play()
        tl_mysql.play()
        tl_wordpress.play()
        tl_firebase.play()
        tl_php.play()
    }

    return (
        <div className="skills-main-ctn">
            <div className="section-title-ctn">
                <h3 className="section-title section-title-skills">My skills</h3>
                <div className="title-border title-border-skills"></div>
            </div>

            <div className="skills-ctn">
                <SkillBar title="HTML5" titleCss="html"/>
                <SkillBar title="CSS3" titleCss="css"/>
                <SkillBar title="JS6" titleCss="js"/>
                <SkillBar title="React.js" titleCss="react"/>
                <SkillBar title="React Native" titleCss="react-native"/>
                <SkillBar title="Redux" titleCss="redux"/>
                <SkillBar title="Node.js" titleCss="node"/>
                <SkillBar title="C/C++" titleCss="c"/>
                <SkillBar title="MySQL" titleCss="mysql"/>
                <SkillBar title="WordPress" titleCss="wordpress"/>
                <SkillBar title="Firebase" titleCss="firebase"/>
                <SkillBar title="PHP" titleCss="php"/>
            </div>

            <p className="skills-text">* I do not claim to know x% of the languages mentioned above. I just think I am able to x% of meeting a need with these languages.</p>
        </div>
    )
}

export default Skills