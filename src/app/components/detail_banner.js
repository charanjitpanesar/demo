import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/blog_detail_scss/blog_detail.scss'

const Detail_banner = () => {
    return (
        <>
            <section className='detail_banner_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>The Rise of Artificial Intelligence in Healthcare</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Detail_banner