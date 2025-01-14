'use client'
import React, { useEffect, useRef, useState } from 'react';
import '../../../public/sass/pages/scroll_star.scss';

const Scroll_star = () => {
    const [allSections, setAllSections] = useState(0);
    const [active, setActive] = useState(0);
    const navRef = useRef([]);
    useEffect(() => {
        let sectionContainer = document.getElementById('section');
        let allChild = Array.from(sectionContainer.children)
        let count = sectionContainer.childElementCount;
        setAllSections(count)
        const options = {
            threshold: 0.7
        }
        const observer = new IntersectionObserver((enteries) => {
            enteries.forEach((entery) => {
                if (entery.isIntersecting) {
                    const index = allChild.indexOf(entery.target);
                    setActive(index)
                }
            })
        }, options)
        allChild.forEach((ele) => {
            observer.observe(ele)
        })
        return () => {
            allChild.forEach((ele) => {
                observer.unobserve(ele)
            })
        }
    }, [allSections, navRef])
    return (
        <>
            <div className="page_nav_main">
                <div className="page_nav">
                    {
                        allSections > 0 &&
                        [...Array(allSections)].map((_, index) => (
                            <div className={`nav_item ${active === index ? 'active' : ''}`} key={index} ref={(ele) => navRef.current[index] = ele}></div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Scroll_star