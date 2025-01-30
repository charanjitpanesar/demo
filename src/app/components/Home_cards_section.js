import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from './Card'
import '../../../public/sass/home_scss/home_cards_section.scss'

const Home_cards_section = ({id}) => {

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
            heading: 'Website Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            heading: 'UI/UX Designing',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            heading: 'Free Tech Consultancy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];
    return (
        
        <section className='home_cards_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
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
    )
}

export default Home_cards_section