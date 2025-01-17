import React from 'react'
import About_banner from '../components/About_banner'
import Scroll_star from '../components/scroll_star'
import About_what_we_do from '../components/About_what_we_do'
import About_work_together from '../components/About_work_together'
import About_partners from '../components/About_partners'
import About_current_work from '../components/About_current_work'

const About_us = () => {
    return (
        <>
            <div className="section" id='section'>
                <About_banner />
                <About_what_we_do/>
                <About_work_together/>
                <About_current_work />
                <About_partners/>
            </div>
            <Scroll_star />
        </>
    )
}

export default About_us