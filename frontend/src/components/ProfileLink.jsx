import React from 'react'

const ProfileLink = () => {
  return (
    <div  style={{boxShadow: 'inset 5px 5px 18px var(--bg-color)'}} className="flex mt-2 p-1 rounded-b-sm  items-center w-fit h-fit justify-center gap-4">
      <a  href="https://www.linkedin.com/in/sameer-gupta-768b28312/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn Logo" className="w-4 h-4 object-cover " />
      </a>
      <a className='bg-white' href='https://github.com/sam-eer12' target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub Logo" className="w-4 h-4 object-cover border-b-[var(--border-color)]" />
      </a>
      <a  href='https://drive.google.com/file/d/1x9hEM9WJfCf4CIgnijLLUYMM2SDSX3Xx/view?usp=sharing' target="_blank" rel="noopener noreferrer">
        <img src='/cv.png' alt='CV Logo' className='w-4 h-4 object-cover '/>
      </a>
    </div>
  )
}

export default ProfileLink
