import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss'

const Calling_outreach = () => {
    return (
        <>
            <section className='calling_outreach_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Ready to Transform Your Outreach?</h3>
                                <div className='button_area'>
                                    <Link href="/" className='btn-primary btn-dark'>Request an AI Agent Demo</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Calling_outreach