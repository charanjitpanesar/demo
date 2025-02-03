import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/home_scss/home_trust.scss'
import Image from 'next/image'
import skullImg from '../../../../public/images/skull_img.png'
import Home_counter from './Home_counter'

const Home_trust = ({id}) => {
    return (
        <section className='home_trust_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row className='align-items-center row-gap-3'>
                                <Col xxl={7} xl={7} lg={7} md={7} sm={7} xm={12}>
                                    <div className='left_area'>
                                        {/* <div className='text'>Expertise</div> */}
                                        <p>
                                             Who we are — passionate, forward-thinking, and dedicated to making a difference in a data-driven world.
                                        </p>
                                        {/* <h3>Imaginations <br></br>Engineered <br></br>Trust Delivered</h3> */}
                                        <h3>Leading Your <br></br>Digital Journey to Success<br></br></h3>
                                        <div className='button_area'>
                                            <Link href="/solutions" className="btn-primary btn-light">Check Our More <i className="bi bi-arrow-return-right"></i></Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xm={12}>
                                    <div className='right_area'>
                                        <h3 className='ver_text'>SAYNT AI</h3>
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
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Home_counter />
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