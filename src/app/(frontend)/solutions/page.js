import React from 'react'
import Solution_banner from '../components/solution_banner'
import Solution_about_us from '../components/Solution_about_us'
import Solution_transform from '../components/Solution_transform'
// import Solution_ai from '../components/solution_ai'
import Solution_projects from '../components/solution_projects'
import Solution_action from '../components/Solution_action'
import Solution_calender from '../components/Solution_calender'
import Contact_banner from '../components/Contact_banner'
import Contact_expertise from '../components/Contact_expertise'
import Contact_industry from '../components/contact_industry'
import Contact_deliver from '../components/Contact_deliver'
import SolutionCost from '../components/SolutionCost'
import SolutionTalkSection from '../components/SolutionTalkSection'

const Solutions = () => {
    let bannerData={
        text:"Welcome to Saynt AI’s Hot Solutions—the next frontier in AI-driven productivity, customer engagement, and brand consistency. We believe in handling the mundane tasks so you can focus on what you do best: closing deals, building relationships, and scaling your business. Ready to see what we’ve got cooking?"
    }
    const comp = [
      Contact_banner  , Contact_expertise, Contact_industry, SolutionCost , Contact_deliver, SolutionTalkSection, Solution_calender
    ]
    return (
        <>
            {
                comp && comp.map((Section, index) => {
                     const props = Section === Contact_banner ? { propsData: bannerData ,  showButtons: false } : {};
                   return <Section key={index} id={`section_${index + 1}`}  {...props} />
                })
            }
        </>
    )
}

export default Solutions