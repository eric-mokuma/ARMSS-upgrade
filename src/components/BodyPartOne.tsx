import React, { useEffect, useState } from 'react'
import '../styles/BodyPartOne.css'

const greetings = [
  'Hello',
  'Bonjour',
  'Hola',
  'Hallo',
  'Ciao',
  'Olá',
  'Привет',
  '你好',
  'こんにちは',
  'مرحبا',
]

const BodyPartOne: React.FC = () => {
  // State to keep track of the current greeting index
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    // Set up an interval to update the greeting every 2 seconds
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % greetings.length)
    }, 2000)
    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bodypartone-container">
      <div className="bodypartone-bg">
        <div className="bodypartone-overlay">
          <h1 className="bodypartone-title">
            Aotearoa refugee and migrant support services
          </h1>
          <h3 className="bodypartone-desc">
            Support Educate <br /> Bridge Advocate Empower
          </h3>
        </div>
        <div className="bodypartone-greetings-band">
          <div className="bodypartone-greetings-fade">
            {/* Display the current greeting with a fade animation */}
            <span key={current} className="greeting">
              {greetings[current]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyPartOne
