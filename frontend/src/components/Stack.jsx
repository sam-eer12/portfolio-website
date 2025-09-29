import React from 'react'
import LogoLoop from '../animations/LogoLoop/LogoLoop'

const imageLogos = [
  { src: "/github.png", alt: "Github", href: "https://github.com" },
  { src: "/react.png", alt: "React", href: "https://reactjs.org" },
  { src: "/css-3.png", alt: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
  { src: "/js.png", alt: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

const Stack = () => {
  return (
    <div>
      <div style={{ height: '90px', position: 'relative', overflow: 'hidden', marginTop: '50px' }}>
        <LogoLoop
            logos={imageLogos}
            speed={100}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
        />
    </div>
    </div>
  )
}

export default Stack
