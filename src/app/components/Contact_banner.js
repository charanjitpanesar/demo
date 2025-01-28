import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/contact_scss/contact_banner.scss'
import Link from 'next/link'

const Contact_banner = ({id}) => {
    return (
        <section className='contact_banner_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <h3>Experience Innovation Through Expertise</h3>
                            <p>
                                Leveraging deep industry knowledge, technical brilliance, and customer-focused strategies to deliver real results
                            </p>
                            <div className='buttons_area'>
                                <Link href='/solutions' className='btn-primary btn_1'>
                                    Explore Solutions
                                </Link>
                                <Link href='https://wa.me/923299346077'  className='btn-primary btn_2'>
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default Contact_banner