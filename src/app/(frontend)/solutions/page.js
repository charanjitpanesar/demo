import React from 'react'
import Solution_banner from '../components/solution_banner'
import Solution_about_us from '../components/Solution_about_us'
import Solution_transform from '../components/Solution_transform'
// import Solution_ai from '../components/solution_ai'
import Solution_projects from '../components/solution_projects'
import Solution_action from '../components/Solution_action'
import Solution_calender from '../components/Solution_calender'

const Solutions = () => {
    const comp = [
        Solution_banner, Solution_about_us, Solution_transform, Solution_action, Solution_calender
    ]
    return (
        <>
            {
                comp && comp.map((Section, index) => (
                    <Section key={index} id={`section_${index + 1}`} />
                ))
            }
        </>
    )
}

export default Solutions