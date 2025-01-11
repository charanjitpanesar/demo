import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/solution_transform.scss';

const Solution_transform = () => {
    return (
        <>
            <section className='transform_solution_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xm={12}>
                                        <div className='left_area'>
                                            <div className='content_area'>
                                                <h3>
                                                    Transform Your Business with Real-World Solutions
                                                </h3>
                                                <p>
                                                    Explore how SAYNT AI is driving success across industries with interactive demos, case studies, and proven results
                                                </p>
                                                <div className='button_area'>
                                                    <Link href="#" className='btn-primary btn-white'>Case-Studies</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xm={12}>
                                        <div className='right_area'>

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

export default Solution_transform