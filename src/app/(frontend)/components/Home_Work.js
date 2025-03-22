'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../../../public/images/logo.svg'
import dotted from '../../../../public/images/dotted.svg'
import container from '../../../../public/images/container.png'
import layer from '../../../../public/images/layer.png'
import Image from 'next/image'
import '@/../public/sass/home_scss/home_work.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home_Work = () => {
    const [current, setCurrent] = useState(0)
    const ref = useRef(null)
    const [length, setLength] = useState(0)
    useEffect(() => {
        let childrens = Array.from(ref.current.children)
        setLength(childrens.length)
        childrens.forEach((ele) => {
            ele.classList.remove('active')
            childrens[current - 1]?.classList.add('active')
        })
    }, [current])
    return (
        <section className='home_work_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="parent_area">
                            <h3>How we <span>Work</span></h3>
                            <div className="work_area">
                                <div className="pagination_area">
                                    <span>{current}</span>/ <span>{length}</span>
                                </div>
                                <ul className="list" ref={ref}>
                                    <li>Project-Based: Get It Built, Get It Done</li>
                                    <li>Dedicated Teams: Your Extended Tech Powerhouse</li>
                                    <li>Consulting & Advisory: Strategy First, Execution Next</li>
                                </ul>
                                <div className="slider_area">
                                    <Swiper
                                        onAfterInit={(e) => { setCurrent(e.realIndex + 1)}}
                                        onSlideChange={(e) => setCurrent(e.realIndex + 1)}
                                        modules={[Navigation]}
                                        navigation={{ nextEl: '.next', prevEl: '.prev' }}
                                    >
                                        {
                                            [...Array(length)].map((_, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className="item">
                                                        <div className="outer_circle">
                                                            <div className="rotate_img first">
                                                                <Image src={container} alt='...' title='...' fetchPriority='low' priority={false} />
                                                            </div>
                                                            <div className="rotate_img layer">
                                                                <Image src={layer} alt='...' title='...' fetchPriority='low' priority={false} />
                                                            </div>
                                                            <div className="dotted">
                                                                <Image src={dotted} alt="..."
                                                                    title="..."
                                                                    priority />
                                                                <div className='logo_area'>
                                                                    <Image
                                                                        src={logo}
                                                                        alt="..."
                                                                        title="..."
                                                                        priority
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="txt"><strong>Have a specific goal in mind?</strong> Whether it’s a custom software, an AI integration, or a dashboard that transforms data into decisions—we scope it, build it, and deliver it.
                                                        </p>
                                                        <p><strong>No fluff, no detours</strong>—just a high-quality solution within a set timeline. Ideal for businesses that need a one-and-done project without long-term commitments.
                                                        </p>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <div className="btns">
                                        <div className="slide_btn prev">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                        <div className="slide_btn next">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_Work
