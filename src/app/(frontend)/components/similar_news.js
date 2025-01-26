import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blog_card from './blog_card'
import '../../../../public/sass/blog_detail_scss/similar.scss';

const Similar_news = ({id}) => {
    return (
        <>
            <section className="news" id={id}>
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
                                    <Row className='row-gap-3'>
                                        {
                                            [...Array(3)].map((_, i) => (
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={i}>
                                                    <Blog_card />
                                                </Col>
                                            ))
                                        }
                                    </Row>
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