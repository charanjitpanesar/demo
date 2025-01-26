import React from 'react'
import '../../../public/sass/contact_scss/contact_expertise.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Contact_faq = ({id}) => {
    return (
        <>
            <section className='contact_faq_section' id={id}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='left_area'>
                                    <h3>Frequently Asked <span>Questions</span></h3>
                                    <p>
                                         We will provide answers to
                                        questions that are often asked
                                        to us. We hope this helps put
                                        your doubts to rest and answers
                                        all your questions
                                    </p>
                                    <div className='button_area'>
                                        <Link href='/' className='btn-primary'>See more</Link>
                                    </div>
                                </div>
                                <div className='right_area'>
                                    <ul>
                                        <li>
                                            <h5>What services does your company offer?</h5>
                                            <p>
                                                We provide cutting-edge AI solutions, including data analysis, process automation, and personalized tech consulting tailored to various industries
                                            </p>
                                        </li>
                                        <li>
                                            <h5>How do you ensure data privacy and security?</h5>
                                            <p>
                                            We follow industry-leading security protocols, data encryption, and strict compliance measures to safeguard sensitive information
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Can you customize solutions for my business?</h5>
                                            <p>
                                            Absolutely! We design personalized strategies that align with your specific business goals and industry challenges.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact_faq