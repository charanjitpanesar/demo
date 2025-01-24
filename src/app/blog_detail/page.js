import React from 'react'
import Detail_banner from '../components/detail_banner'
import Detail_newsletter from '../components/Detail_newsletter'
import Similar_news from '../components/similar_news'
import Detail_info from '../components/Detail_info'

const page = () => {
    return (
        <>
            <Detail_banner />
            <Detail_info />
            <Similar_news />
            <Detail_newsletter />
        </>
    )
}

export default page