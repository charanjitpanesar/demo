'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/ai_scss/ai.scss'
import bannerImg from '../../../../public/images/ai_banner_img2.png'
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const Parallax_section = () => {

    
    useGSAP(() => {
        gsap.to("#page1",{
            scrollTrigger:{
                trigger:"#page1",
                start:'top top',
                end:'bottom top',
                // markers:true,
                pin:true,
                pinSpacing: false, 
                scrub: 1 
            }
        })
        gsap.to("#page2",{
            scrollTrigger:{
                trigger:"#page2",
                start:'top top',
                end:'bottom top',
                // markers:true,
                pin:true,
                pinSpacing: false, 
                scrub: 1 
            }
        })
        gsap.to("#page3",{
            scrollTrigger:{
                trigger:"#page3",
                start:'top top',
                end:'bottom top',
                // markers:true,
                pin:true,
                pinSpacing: false, 
                scrub: 1 
            }
        })
        gsap.to("#page4",{
            scrollTrigger:{
                trigger:"#page4",
                start:'top top',
                end:'bottom top',
                pin:true, 
                scrub: 1 
            }
        })

    }, []);
    return (
        <>
            <section className='parallax_section' id='page1'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3>AI Tutor</h3>
                                            <p>
                                                An intelligent system that tailors learning experiences to each student’s progress
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area'>
                                                <Image src={bannerImg} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='parallax_section even_section' id='page2'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area'>
                                                <Image src={bannerImg} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3>Study Room</h3>
                                            <p>
                                             A digital space for independent learning with AI-assisted
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='parallax_section' id='page3'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3>AI Planner</h3>
                                            <p>
                                             A tool that structures study schedules and tracks progress based on quiz results.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area'>
                                                <Image src={bannerImg} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='parallax_section even_section' id='page4'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='image_area'>
                                                <Image src={bannerImg} alt='...' title='...' priority />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                        <div className='left_area'>
                                            <h3>Interactive Learning</h3>
                                            <p>
                                            Features like quizzes, flashcards, and leaderboards enhance retention and engagement                                            </p>
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

export default Parallax_section