import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blog_card from './blog_card'
import '../../../public/sass/blog_detail_scss/similar.scss';

const Similar_news = () => {
    return (
        <>
            <section className="news">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_area">
                                <div className="title_area">
                                    <h3>Similar News</h3>
                                    <div className="button_area">
                                        <Link href={'/'} className='view_all'>
                                            View All News
                                           <span> <i className="bi bi-arrow-up-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="cards">
                                    {
                                        [...Array(3)].map((_, i) => (
                                            <Blog_card key={i} />
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Similar_news