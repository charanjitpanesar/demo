import React from 'react'
import '../../../../public/sass/ai_scss/ai.scss'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Image from 'next/image'
import newsletterBg from '../../../../public/images/ai_newsletter.png'

const Ai_newsletter = () => {
    return (
        <section className='ai_newsletter_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='form_area'>
                                <Form>
                                    <div className='form-group'>
                                        <Form.Control type="email" placeholder="Enter your email here" />
                                    </div>
                                </Form>
                            </div>
                            <div className='image_area'>
                                <Image src={newsletterBg} alt="..." title="..." priority ></Image>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ai_newsletter