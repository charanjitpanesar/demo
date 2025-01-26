import React from 'react'
import Solution_calender from '../components/Solution_calender'
import Contact_banner from '../components/Contact_banner'
import Contact_expertise from '../components/Contact_expertise'
import Contact_deliver from '../components/Contact_deliver'
import Contact_faq from '../components/Contact_faq'
import Contact_industry from '../components/contact_industry'

const page = () => {
    
    const comp = [ Contact_banner,Contact_expertise,Contact_industry,Contact_deliver, Contact_faq, Solution_calender]
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