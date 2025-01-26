import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../../public/sass/home_scss/home_industry.scss'
import footerImg from '../../../../public/images/footer_banner_bg.png'
import Image from 'next/image'

const Home_industry = ({id}) => {
    const cardsData = [
        {
            image: footerImg, 
            tag: "SEO",
            time: "5 min. read",
            title: "How AI Is Revolutionizing the Logistics Industry",
        },
        {
            image: footerImg, 
            tag: "PPC",
            time: "5 min. read",
            title: "5 AI Innovations Shaping the Next Decade",
        },
        {
            image: footerImg, 
            tag: "Tips & trick",
            time: "5 min. read",
            title: "Creating engaging content that converts: Best practices for 2024",
        },
    ];

    return (
        <section className='home_industry_section' id={id}>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='parent_area'>
                            <div className='upper_area'>
                                <h3>Industry Affairs and Insights</h3>
                                <div className='btn_text_area'>
                                    <p>
                                        Blogs of Industry affairs, in which decision makers are interested
                                    </p>
                                    <Link href="/blogs" className='btn-primary btn-light'>View all Blogs <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className='cards_area'>
                            {cardsData.map((card, index) => (
                                <div key={index} className={`card_inner card-${index + 1}`}>
                                    <div className="image_area">
                                        <Image
                                            src={card.image}
                                            alt="..."
                                            title="..."
                                            priority
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="tag_area">{card.tag}</div>
                                        <span>{card.time}</span>
                                    </div>
                                    <h3>{card.title}</h3>
                                </div>
                            ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}

export default Home_industry