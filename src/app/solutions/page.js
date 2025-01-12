import React from 'react'
import Solution_banner from '../components/solution_banner'
import Solution_about_us from '../components/Solution_about_us'
import Solution_transform from '../components/Solution_transform'
import Solution_projects from '../components/solution_projects'
import Solution_action from '../components/Solution_action'

const Solutions = () => {
  return (
    <>
        <Solution_banner />
        <Solution_about_us/>
        <Solution_transform/>
        <Solution_projects/>
        <Solution_action />
    </>
  )
}

export default Solutions