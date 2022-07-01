import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-v.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  // state hook
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'd', 'a']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          {/* delay of 12 or 1.2s delay */}
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer"></img>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          {/* web developer */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Software Engineer</h2>
        <Link to="/contact" className="flat-button">
          LET'S CONNECT
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
