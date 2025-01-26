import Image from 'next/image'
import React from 'react'
import b1 from '../../../../public/images/b1.png'
import Link from 'next/link'
import '../../../../public/sass/pages/cards.scss';

const Blog_card = () => {
    const social = [{ icon: <i className="bi bi-heart"></i>, val: '2.2k' }, { icon: <i className="bi bi-send"></i>, val: '60' }]
    return (
        <>
            <div className="card_item">
                <div className="top_area">
                    <div className="img_wrapper">
                        <Image src={b1} alt='...' title='...' fetchPriority='low' priority={false} />
                    </div>
                </div>
                <div className="bottom_area">
                    <div className="title">
                        <h3>A Decisive Victory for Progressive Policies</h3>
                        <p>Politics</p>
                    </div>
                    <div className="social">
                        <div className="left">
                            {
                                social?.map((item, i) =>(
                                    <div className="chip" key={i}>
                                        <span>{item.icon}</span>
                                        {item.val}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="right">
                            <Link href={'/'} className='read'>Read More <span><i className="bi bi-arrow-up-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog_card