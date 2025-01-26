import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card';
import '../../../../public/sass/home_scss/home_cards_section.scss'


const About_what_we_do = ({id}) => {

    const cardData = [
        {
            heading: 'Custom Software Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            heading: 'AI Solution and Automation',
            description: 'Transform your business with AI-driven insights and predictive analytics.',
        },
        {
            heading: 'Mobile App Development',
            description: 'Seamlessly integrate cloud solutions to enhance scalability and efficiency.',
        },
        {
            heading: 'Marketing and Branding',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            heading: 'Free Tech Consultancy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            heading: 'Free Marketing Consultancy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];
    return (
        <>
            <section className='home_cards_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>What We <span>Do</span></h3>
                                <Row>
                                {cardData.map((card, index) => (
                                        <Col key={index} xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <Card 
                                                heading={card.heading} 
                                                description={card.description} 
                                                className={`card_${index + 1}`}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About_what_we_do