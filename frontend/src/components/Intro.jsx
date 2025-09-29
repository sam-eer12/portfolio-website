import React from 'react'
import TextType from '../animations/TextType/TextType'

const Intro = () => {
  return (
    <div>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 p-1'>
        <TextType 
        text={["Welcome", "Hope You Like It!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="__"
        />
      </h1>      
    </div>
  )
}

export default Intro
