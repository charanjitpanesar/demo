import React from 'react'
import Solution_calender from '../components/Solution_calender'
import Scroll_star from '../components/scroll_star'
import Contact_banner from '../components/Contact_banner'
import Contact_expertise from '../components/Contact_expertise'
import Contact_deliver from '../components/Contact_deliver'
import Contact_faq from '../components/Contact_faq'

const page = () => {
    return (
        <>
            <div className="section" id='section'>
                <Contact_banner/>
                <Contact_expertise/>
                <Contact_deliver/>
                <Contact_faq/>
                <Solution_calender/>
            </div>
            <Scroll_star />
        </>
    )
}

export default page