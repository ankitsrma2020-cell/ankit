function FeatureCard({ number, title, description }) {
  return (
    <article className="feature">
      <span className="feature-number">{number}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
