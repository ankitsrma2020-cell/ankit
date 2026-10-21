function Brand() {
  return (
    <a className="brand" href={import.meta.env.BASE_URL} aria-label="React Starter home">
      <span className="brand-mark">R</span>
      <span>React Starter</span>
    </a>
  )
}

export default Brand
