'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/about_scss/about_meet_team.scss'
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs , Controller} from 'swiper/modules';


import img1 from '../../../../public/images/footer_banner_bg.png'
import img2 from '../../../../public/images/connect_bg.png'
import img3 from '../../../../public/images/user.png'
import logo from '../../../../public/images/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const About_meet_team = ({id}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <section className='about_meet_team_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={8} xl={8} lg={8} md={7} sm={7} xs={12}>
                                    <div className='left_area'>
                                        <div className='upper_area'>
                                            <div className='button_area'>
                                                <Link href='/' className='btn-primary'>
                                                        <div className='logo_area'>
                                                            <Image 
                                                                src={logo}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    <span>Saynt AI</span>
                                                </Link>
                                            </div>
                                            <h2>Meet The Team</h2>
                                        </div>
                                        <div className='slider_area'>
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode,  Thumbs , Controller]}
                                                className="mySwiper2"
                                                onSwiper={setControlledSwiper}
                                            >
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Saim Khan 1</h3>
                                                        <div className='text'>CMO</div>
                                                        <p>
                                                            Siam Khan, the Chief Marketing Officer (CMO) of Saynt AI, is a strategic leader passionate about driving innovation in the AI industry. With a focus on creative marketing strategies and data-driven insights, Siam plays a pivotal role in shaping Saynt’s brand presence and outreach. His expertise in digital marketing, brand storytelling, and growth strategies helps position Saynt AI as a forward-thinking and customer-centric company.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Saim Khan 2</h3>
                                                        <div className='text'>CMO</div>
                                                        <p>
                                                            Siam Khan, the Chief Marketing Officer (CMO) of Saynt AI, is a strategic leader passionate about driving innovation in the AI industry. With a focus on creative marketing strategies and data-driven insights, Siam plays a pivotal role in shaping Saynt’s brand presence and outreach. His expertise in digital marketing, brand storytelling, and growth strategies helps position Saynt AI as a forward-thinking and customer-centric company.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Saim Khan 3</h3>
                                                        <div className='text'>CMO</div>
                                                        <p>
                                                            Siam Khan, the Chief Marketing Officer (CMO) of Saynt AI, is a strategic leader passionate about driving innovation in the AI industry. With a focus on creative marketing strategies and data-driven insights, Siam plays a pivotal role in shaping Saynt’s brand presence and outreach. His expertise in digital marketing, brand storytelling, and growth strategies helps position Saynt AI as a forward-thinking and customer-centric company.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <h3>Saim Khan 4</h3>
                                                        <div className='text'>CMO</div>
                                                        <p>
                                                            Siam Khan, the Chief Marketing Officer (CMO) of Saynt AI, is a strategic leader passionate about driving innovation in the AI industry. With a focus on creative marketing strategies and data-driven insights, Siam plays a pivotal role in shaping Saynt’s brand presence and outreach. His expertise in digital marketing, brand storytelling, and growth strategies helps position Saynt AI as a forward-thinking and customer-centric company.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={5} sm={5} xs={12}>
                                    <div className='right_area'>
                                        <div className='slider_area'>
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                navigation={{
                                                    nextEl: '.next-btn',
                                                    prevEl: '.prev-btn',
                                                }}
                                                modules={[FreeMode, Thumbs , Controller , Navigation]}
                                                controller={{ control: controlledSwiper }}
                                                className="mySwiper2"
                                            >
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img1}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img2}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img3}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='slide_inner'>
                                                        <div className='image_area'>
                                                            <Image 
                                                                src={img1}
                                                                alt='...'
                                                                title='...'
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="custom-navigation">
                                                <div className="prev-btn">
                                                    <i className="bi bi-arrow-left"></i>
                                                </div>
                                                <div className="next-btn">
                                                    <i className="bi bi-arrow-right"></i>
                                                </div>
                                            </div>
                                            <div className='thumb_slider'>
                                                <Swiper
                                                    onSwiper={setThumbsSwiper}
                                                    loop={true}
                                                    spaceBetween={10}
                                                    slidesPerView={4}
                                                    freeMode={true}
                                                    watchSlidesProgress={true}
                                                    modules={[FreeMode,  Thumbs]}
                                                    className="mySwiper"
                                                >
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img1}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img2}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img3}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className='slide_inner'>
                                                            <div className='image_area'>
                                                                <Image 
                                                                    src={img1}
                                                                    alt='...'
                                                                    title='...'
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
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

export default About_meet_team