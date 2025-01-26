import React from 'react'
import Detail_banner from '../components/detail_banner'
import Detail_newsletter from '../components/Detail_newsletter'
import Similar_news from '../components/similar_news'
import Detail_info from '../components/Detail_info'

const page = () => {
    const comp = [Detail_banner, Detail_info, Similar_news, Detail_newsletter]
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

export default page