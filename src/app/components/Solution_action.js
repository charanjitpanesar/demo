import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/solution_action.scss'

const Solution_action = () => {
    return (
        <section className='solution_action_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xm={12}>
                        <div className='parent_area'>
                            <Row>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xm={12}>
                                    <div className='left_area'>
                                        <h3>Solutions In Action</h3>
                                        <p>See how SAYNT AI boosts efficiency in these quick demos</p>
                                    </div>
                                </Col>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={6} xm={12}>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution_action