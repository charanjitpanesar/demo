import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import logo from '../../../public/images/clear_logo.svg'
import '../../../public/sass/carees_scss/careers.scss'
import Coming_soon from '../components/Coming_soon'

const page = () => {
    return (
        <>
        <Coming_soon/>
            {/* <section className='career_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row className='align-items-center'>
                                    <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
                                        <div className='left_area'>
                                            <h3>Welcome jobseeker</h3>
                                            <p>Please enter your details</p>
                                            <Form>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                        <div className='form-group'>
                                                            <Form.Label>First name</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter first name" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Last name</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter last name" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Country of Origin</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter country" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>State</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter State" />
                                                        </div>
                                                        <div className='form-group'>
                                                            <div className='text'>Are you WIlling to relocate?</div>
                                                            <Form.Check 
                                                                type="radio" 
                                                                id="yes" 
                                                                name="radio1" 
                                                                label="Yes"
                                                            />
                                                            <Form.Check 
                                                                type="radio" 
                                                                id="no" 
                                                                name="radio1" 
                                                                label="No"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                        <div className='form-group'>
                                                            <Form.Label>Specific Employment Status</Form.Label>
                                                            <Form.Control type="text" placeholder="--- ---" />
                                                        </div>
                                                        <div className='form-group file_area'>
                                                            <Form.Label>Specific Employment Status</Form.Label>
                                                            <div className='btn-primary btn-green'>Upload</div>
                                                            <div className='border_input'>.</div>
                                                            <Form.Control type="file" placeholder="--- ---" className='file_upload'/>
                                                        </div>
                                                        <div className='form-group'>
                                                            <Form.Label>Comments</Form.Label>
                                                            <Form.Control as="textarea" rows={6} placeholder='Enter your comment'/>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                        <div className='button_area'>
                                                            <Button type="submit" className='btn-primary btn-green'>Apply</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                        <div className='right_area'>
                                            <div className='logo_area'>
                                                <Image 
                                                    src={logo}
                                                    alt='...'
                                                    title='...'
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
        </>
    )
}

export default page