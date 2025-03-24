import React from 'react'
import CallingAgentHeroSection from '../components/CallingAgentHeroSection'
import Calling_Service from '../components/Calling_Service'
import Calling_meet from '../components/Calling_meet'
import Calling_support from '../components/Calling_support'
import Calling_impact from '../components/Calling_impact'
import Calling_result from '../components/Calling_result'
import Calling_outreach from '../components/Calling_outreach'

const page = () => {
    const comp = [ 
        CallingAgentHeroSection,
        Calling_Service,
        Calling_meet,
        Calling_support,
        Calling_impact,
        Calling_result,
        Calling_outreach
    ]
    return (

        <>
            {
                comp && comp.map((Section,index)=>(
                    <Section id={`section_${index + 1}`} key={index}/>
                ))
            }
        </>
    )
}

export default page