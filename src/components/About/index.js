import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import Headshot from '../../assets/images/headshot.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hello, world! I'm Vida, and I'm a Software Engineer passionate about
          developing scalable, impactful solutions to real-world problems.
        </p>
      </div>

      <div className="headshot-container">
        <img alt="vida headshot" className="headshot" src={Headshot} />
      </div>
    </div>
  )
}

export default About
