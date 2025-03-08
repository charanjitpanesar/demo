import React from 'react'
import Ai_Hero from '../components/Ai_Hero'
import Ai_text_opener from '../components/Ai_text_opener'
import Ai_chat_banner from '../components/Ai_chat_banner'
import Parallax_section from '../components/Parallax_section'
import Ai_why_matter from '../components/Ai_why_matter'
import Ai_key_feature from '../components/Ai_key_feature'
import Ai_impact from '../components/Ai_impact'
import Ai_shapes from '../components/Ai_shapes'
import Ai_newsletter from '../components/Ai_newsletter'


const AiAcedemy = () => {
    const comp = [Ai_Hero,Ai_text_opener, Ai_chat_banner , Ai_why_matter, Ai_key_feature , Parallax_section , Ai_impact, Ai_shapes , Ai_newsletter]

    
    return (
        <>
            {
                comp && comp.map((Section, index) => (
                    <Section id={`section_${index + 1}`} key={index} />
                ))
            }

        </>
    )
}

export default AiAcedemy