import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/about_scss/about_banner.scss';
import logo from'../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const About_banner = () => {
    return (
        <section className='about_banner_section'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12} className='h-100'>
                        <div className='parent_area'>
                            <div className='button_area'>
                                <Link href="/">
                                    <div className='logo_area'>
                                        <Image
                                            src={logo}
                                            alt="..."
                                            title="..."
                                            priority
                                        />
                                    </div>
                                    <span>About Us</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                            <h3>OutSpace Competition with breakthrough Technology 
                            It is what we do</h3>
                            <p>Cost-efficient, compliant, and tailored AI tools for your business.</p>
                            <div className='intro_btn'>
                                <Link href="/">
                                    <span>About Us</span>
                                    <div className='icon_area'>
                                        <i className="bi bi-play-fill"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About_banner