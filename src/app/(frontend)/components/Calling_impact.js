import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/calling_agent/calling_agent.scss';
import impactLogo1 from '../../../../public/images/impact_logo1.png';
import impactLogo2 from '../../../../public/images/impact_logo2.png';
import impactLogo3 from '../../../../public/images/impact_logo3.png';
import impactLogo4 from '../../../../public/images/impact_logo4.png';
import impactLogo5 from '../../../../public/images/impact_logo5.png';
import Image from 'next/image';

const Calling_impact = () => {
    return (
        <>
            <section className='calling_impact_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <h3>Impact by the <span>Numbers</span></h3>
                                <div className='card_parent'>
                                    <div className='card_area'>
                                        <div className='image_area'>
                                            <Image src={impactLogo1} alt="..." priority />
                                        </div>
                                        <p>
                                            <span>90%</span>+ Call Answer Rate - No more missed opportunities
                                        </p>
                                    </div>
                                    <div className='card_area'>
                                        <div className='image_area'>
                                            <Image src={impactLogo2} alt="..." priority />
                                        </div>
                                        <p>
                                            <span>60%</span> Cost Reduction - Slash staffing and training overhead
                                        </p>
                                    </div>
                                    <div className='card_area'>
                                        <div className='image_area'>
                                            <Image src={impactLogo3} alt="..." priority />
                                        </div>
                                        <p>
                                            <span>2X</span> Faster Resolution -  AI resolves common queries instantly
                                        </p>
                                    </div>
                                    <div className='card_area'>
                                        <div className='image_area'>
                                            <Image src={impactLogo4} alt="..." priority />
                                        </div>
                                        <p>
                                            <span>Zero</span>  coffee breaks required (unless you want your AI to sip a digital latte)
                                        </p>
                                    </div>
                                    <div className='card_area'>
                                        <div className='image_area'>
                                            <Image src={impactLogo5} alt="..." priority />
                                        </div>
                                        <p>
                                            <span> 30% </span>Higher Satisfaction –  Happy customers = repeat business
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Calling_impact