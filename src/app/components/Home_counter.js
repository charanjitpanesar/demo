import React from 'react'
import logo from '../../../public/images/logo.png'
import Image from 'next/image';
import '../../../public/sass/home_scss/home_counter.scss'
import { Col, Container, Row } from 'react-bootstrap';

const Home_counter = () => {
    return (
        <section className='home_counter_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='left_area'>
                                <div className='logo_area'>
                                    <Image
                                        src={logo}
                                        alt="..."
                                        title="..."
                                        priority
                                    />
                                </div>
                            </div>
                            <div className='right_area'>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='counter_area'>
                                            <h3>5+</h3>
                                            <p>Years Experience</p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='counter_area'>
                                            <h3>30+</h3>
                                            <p>Clients Aquired</p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12}>
                                        <div className='counter_area border-0'>
                                            <h3>200+</h3>
                                            <p>Projects Delivered</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_counter