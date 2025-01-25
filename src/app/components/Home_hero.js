import React from 'react'
import '../../../public/sass/home_scss/home_hero_section.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
// import circleImg from '../../../public/images/circle_img.png'
// import logo from '../../../public/images/logo.svg'
import logo from '../../../public/images/home_banner_logo.svg'
// import dotted from '../../../public/images/dotted.svg'
import Image from 'next/image';


const Home_hero = ({ id }) => {
    return (
        <>
            <section className='home_hero_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                        <div className='left_area'>
                                            <h3>
                                                OutSpace, Outperform Outlast
                                            </h3>
                                            <p>your trusted Ally for Market domination</p>
                                            <div className='buttons_area'>
                                                <Link href='#' className='btn-primary btn-green'>Request a Demo</Link>
                                                <Link href='/solutions' className='btn-primary btn-light'>Learn More</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xm={12}>
                                        <div className='right_area'>
                                            {/* <div className='circles_img'>
                                                <Image
                                                    src={circleImg}
                                                    alt="..."
                                                    title="..."
                                                    priority
                                                />
                                            </div> */}
                                            {/* <div className="dotted">
                                                <Image src={dotted} alt="..."
                                                    title="..."
                                                    priority /> */}
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt="..."
                                                        title="..."
                                                        priority
                                                    />
                                                </div>
                                            {/* </div> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home_hero