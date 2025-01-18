import React from 'react'
import Solution_calender from '../components/Solution_calender'
import Scroll_star from '../components/scroll_star'

const page = () => {
    return (
        <>
            <div className="section" id='section'>
                <Solution_calender/>
            </div>
            <Scroll_star />
        </>
    )
}

export default page