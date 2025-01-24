import React from 'react'
import Blog_newsletter from '../components/Blog_newsletter'
import Blogs_headline from '../components/Blogs_headline'
import Blog_category from '../components/Blog_category'
import Blog_banner from '../components/Blog_banner'

const page = () => {
    return (
        <>
            <Blog_banner />
            <Blog_category />
            <Blogs_headline />
            <Blog_newsletter />
        </>
    )
}

export default page