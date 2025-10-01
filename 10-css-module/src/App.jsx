import React from 'react'
import Card from './components/Card'
// import './netflix.css'
import './components/Netflix.module.css'

function App() {
  return (
    <section className='container'>
      <h1 className='card-heading'>List of Best Netflix Series</h1>
    <Card />
    </section>
  )
}

export default App