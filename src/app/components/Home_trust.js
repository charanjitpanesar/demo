import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/home_scss/home_trust.scss'
import Image from 'next/image'
import skullImg from '../../../public/images/skull_img.png'

const Home_trust = () => {
    return (
        <section className='home_trust_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row className='align-items-center'>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                    <div className='left_area'>
                                        <div className='text'>Expertise</div>
                                        <h3>Imaginations <br></br>Engineered <br></br>Trust Delivered</h3>
                                        <p>
                                             Who we are — passionate, forward-thinking, and dedicated to making a difference in a data-driven world.
                                        </p>
                                        <div className='button_area'>
                                            <Link href="/" className="btn-primary btn-green">Check Our More <i className="bi bi-arrow-return-right"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                    <div className='right_area'>
                                        <h3>SAYNT AI</h3>
                                        <div className='image_area'>
                                            <Image
                                                src={skullImg}
                                                alt='...'
                                                title='...'
                                                fetchPriority='low'
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default Home_trust