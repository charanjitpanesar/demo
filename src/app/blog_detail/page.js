import React from 'react'
import Scroll_star from '../components/scroll_star'
import Detail_banner from '../components/detail_banner'
import Detail_newsletter from '../components/Detail_newsletter'
import Similar_news from '../components/similar_news'
import Detail_info from '../components/Detail_info'

const page = () => {
    return (
        <>
            <div className="section" id='section'>
                <Detail_banner/>
                <Detail_info/>
                <Similar_news />
                <Detail_newsletter/>
            </div>
            <Scroll_star />
        </>
    )
}

export default page