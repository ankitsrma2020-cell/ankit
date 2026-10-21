import { useState } from 'react'
import Brand from './components/Brand.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import HeroArt from './components/HeroArt.jsx'
import { features } from './data/features.js'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <main className="page-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <Brand />
        <a className="nav-link" href="https://react.dev" target="_blank" rel="noreferrer">
          Learn React <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A clean place to start</p>
          <h1>Build something <em>worth sharing.</em></h1>
          <p className="intro">
            A simple React foundation for turning your next idea into a thoughtful, useful product.
          </p>
          <button className="primary-button" onClick={() => setStarted(true)}>
            {started ? "You're all set ✓" : 'Start building'}
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <HeroArt />
      </section>

      <section className="features" aria-label="Project features">
        {features.map((feature) => <FeatureCard key={feature.number} {...feature} />)}
      </section>

      <footer>Made with React <span>·</span> Ready for your next idea</footer>
    </main>
  )
}

export default App
