import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../../../public/sass/blog_scss/blog_newsletter.scss'
import newsletterImg from '../../../public/images/newsletter_bg.png'
import Image from 'next/image'

const Blog_newsletter = () => {
    return (
        <>
            <section className='blog_newsletter_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Your Next Adventure</h3>
                                <h3> Starts Here!</h3>
                                <p> subscribe to our newsletter</p>
                                <div className='image_area'>
                                    <Image
                                        src={newsletterImg}
                                        alt='...'
                                        title='...'
                                        priority
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blog_newsletter