'use client'
import React from 'react'
import '../../../public/sass/pages/solution_calender.scss';
import { Col, Container, Row } from 'react-bootstrap';
import arrowDown1 from '../../../public/images/arrow_down.png';
import arrowDown2 from '../../../public/images/arrow_down2.png';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('react-calendar'), {
    ssr: false,
    loading: () => <p>Calender is Loading...</p>
})

const Solution_calender = () => {

    const cardData = [
        {
            step: 'Step 1',
            title: 'Schedule Some Time',
            description: 'Choose a time that suits you best',
        },
        {
            step: 'Step 2',
            title: 'Meeting Preperation',
            description: 'Few Questions and Answers to find what you need',
        },
        {
            step: 'Step 3',
            title: '20 Mintue Intro Call',
            description: 'Let’s Know each other and discuss how we can integrate AI into your business!',
        },
    ];
    return (
        <section className='solution_calender_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='upper_area'>
                                <h3>Identify Your Needs</h3>
                                <p className='green'>Let us know what challenges you’re facing.</p>
                                <p>Whether it’s fleet optimization, compliance, or cost reduction, we’ll help you pinpoint areas for improvement.
                                    <br></br>Why it matters: You get personalized advice tailored to your business</p>
                            </div>
                            <div className='cards_area'>
                                <div className='arrow_img1'>
                                    <Image src={arrowDown1} alt='...' title="..." priority></Image>
                                </div>
                                <div className='arrow_img2'>
                                    <Image src={arrowDown2} alt='...' title="..." priority></Image>
                                </div>
                                {cardData.map((card, index) => (
                                    <div
                                        className={`card_inner ${index % 2 !== 0 ? 'even' : ''}`}
                                        key={index}
                                    >
                                        <div className='circle_area'>{card.step}</div>
                                        <div className='content_area'>
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="calender_area">
                                <Row>
                                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}>
                                        <div className="left">

                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                        <div className="center">
                                            <Calendar
                                                className={'cal'}
                                                tileClassName={'tile'}
                                            />
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3}></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution_calender