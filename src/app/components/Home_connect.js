import React from 'react'
import '../../../public/sass/home_scss/home_connect.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Home_connect = () => {
    return (
        <section className='home_connect_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={5} xl={5} lg={5} md={6} sm={6} xm={12}>
                                    <div className='left_area'>
                                        <h3>
                                            Connect. Merge. Work
                                        </h3>
                                        <div className='button_area'>
                                            <Link>
                                            </Link>
                                        </div>
                                        <p>Join the Network Where Innovation Meets Opportunity – Your Journey with Saynt Starts Here</p>
                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={6} sm={6} xm={12}>
                                    
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home_connect