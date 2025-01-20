import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/blog_detail_scss/detail_info.scss'

const Detail_info = () => {
    const data = [
        { name: 'Publication Date', value: 'October 15, 2023' },
        { name: 'Category', value: 'Healthcare' },
        { name: 'Reading Time', value: '10 Min' },
        { name: 'Author Name', value: 'Dr. Emily Walker' }
    ]
    const list = ['Introduction','AI in Diagnostic Imaging','Predictive Analytics and Disease Prevention','Personalized Treatment Plans','Drug Discovery and Research','AI in Telemedicine','Ethical Considerations','The Future of AI in Healthcare','Conclusion']
    return (
        <section className='detail_info_section'>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='left_area'>
                                <div className='intro_area'>
                                    <h3>Introduction</h3>
                                    <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
                                </div>
                                <div className='main_content'>
                                    <h3>Artificial Intelligence (AI)</h3>
                                    <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                                    <p>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
                                    <h3>Predictive Analytics and Disease Prevention</h3>
                                    <p>
                                        One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
                                    </p>
                                </div>
                            </div>
                            <div className='right_area'>
                                <div className="social_area">
                                    <div className='chip'><span><i className="bi bi-heart-fill"></i></span>24.5k</div>
                                    <div className='chip'><span><i className="bi bi-eye"></i></span>50k</div>
                                    <div className='chip'><span><i className="bi bi-send"></i></span>206</div>
                                </div>
                                <div className="content">
                                    <div className="published_area">
                                        <ul>
                                            {
                                                data.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div className="top">{item.name}</div>
                                                            <div className="bottom">{item.value}</div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="table_contents">
                                        <p>Table of Contents</p>
                                        <ul className="listing">
                                            {
                                                list.map((item,i) =>(
                                                    <li key={i}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Detail_info