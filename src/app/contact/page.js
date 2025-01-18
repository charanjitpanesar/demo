import React from 'react'
import Solution_calender from '../components/Solution_calender'
import Scroll_star from '../components/scroll_star'
import Contact_banner from '../components/Contact_banner'

const page = () => {
    return (
        <>
            <div className="section" id='section'>
                <Contact_banner/>
                <Solution_calender/>
            </div>
            <Scroll_star />
        </>
    )
}

export default page