import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from './Card';
import '../../../public/sass/home_scss/home_cards_section.scss'


const About_what_we_do = ({id}) => {

    const cardData = [
        {
            heading: 'Market Insights',
            description: 'Providing updates on market trends and changes to keep businesses ahead of the curve',
        },
        {
            heading: 'Technology Research',
            description: 'Conducting in-depth research on technological advancements impacting industries',
        },
        {
            heading: 'Consultancy Services',
            description: 'Offering free marketing and technological consultancy to empower businesses with actionable advice.',
        },
        {
            heading: 'Tailored Solutions',
            description: 'Delivering innovative tech solutions designed for the unique needs of relevant industries',
        },
        {
            heading: 'Custom Software Development',
            description: 'Building scalable, efficient, and user-focused software solutions',
        },
        {
            heading: 'AI Solutions',
            description: 'Integrating artificial intelligence to streamline processes and enhance decision-making',
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