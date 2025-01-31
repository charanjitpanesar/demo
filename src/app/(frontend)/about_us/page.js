import React from 'react'
import About_banner from '../components/About_banner'
import About_what_we_do from '../components/About_what_we_do'
import About_work_together from '../components/About_work_together'
import About_partners from '../components/About_partners'
import About_current_work from '../components/About_current_work'
import About_meet_team from '../components/About_meet_team'

const About_us = () => {
    const comp = [About_banner, About_what_we_do, About_meet_team, About_work_together]
    return (
        <>
            {
                comp && comp.map((Section, index) => (
                    <Section id={`section_${index + 1}`} key={index} />
                ))
            }

        </>
    )
}

export default About_us