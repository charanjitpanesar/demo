'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/contact_scss/contact_expertise.scss'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../../../public/images/big_logo.png'

import 'swiper/css';


import Link from 'next/link';
import Image from 'next/image';

const Contact_expertise = () => {
    return (
        <>
            <section className='contact_expertise_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Core <span>Expertise</span></h3>
                                <div className='slider_area'>
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={0}
                                        centeredSlides={true}
                                        loop={true}
                                        autoplay={{
                                            delay: 2000, 
                                            disableOnInteraction: false, 
                                          }}
                                        speed={500}
                                        modules={[Autoplay]}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        className="mySwiper"
                                        breakpoints={{
                                            0: {
                                              slidesPerView: 1,
                                              centeredSlides: true,
                                                spaceBetween:20,
                                            },
                                            556: {
                                                slidesPerView: 3, 
                                                spaceBetween:0,
                                              },
                                            768: {
                                              slidesPerView: 3, 
                                              spaceBetween:0,
                                            },
                                          }}
                                    >
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                Business Consultancy
                                                </h3>
                                                <p>
                                                Empowering Your Business with Strategic Insights and Innovative Solutions
                                                </p>
                                                <Link href='/'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    Software Development
                                                </h3>
                                                <p>
                                                    Full-stack development, scalable architectures, and cloud services.
                                                </p>
                                                <Link href='/'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                AI & Machine Learning
                                                </h3>
                                                <p>
                                                Predictive analytics, NLP, and AI-powered automation
                                                </p>
                                                <Link href='/'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='slide_inner'>
                                                <div className='logo_area'>
                                                    <Image
                                                        src={logo}
                                                        alt='...'
                                                        title='...'
                                                        priority='...'
                                                    />
                                                </div>
                                                <h3>
                                                    Software Development
                                                </h3>
                                                <p>
                                                    Full-stack development, scalable architectures, and cloud services.
                                                </p>
                                                <Link href='/'>Learn More <i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> 
        </>
    )
}

export default Contact_expertise