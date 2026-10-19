import { useState } from 'react'

const features = [
  ['01', 'Fast by default', 'Vite gives you instant feedback while you build.'],
  ['02', 'Easy to change', 'A small, focused structure keeps experiments simple.'],
  ['03', 'Ready to grow', 'Add routes, data, and components when your idea is ready.'],
]

function App() {
  const [started, setStarted] = useState(false)

  return (
    <main className="page-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="React Starter home">
          <span className="brand-mark">R</span>
          <span>React Starter</span>
        </a>
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
            {started ? 'You’re all set ✓' : 'Start building'}
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="hero-art" aria-label="Abstract colorful illustration" role="img">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
          <div className="art-card"><span>your idea</span><strong>starts here.</strong></div>
        </div>
      </section>

      <section className="features" aria-label="Project features">
        {features.map(([number, title, description]) => (
          <article className="feature" key={number}>
            <span className="feature-number">{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer>Made with React <span>·</span> Ready for your next idea</footer>
    </main>
  )
}

export default App
