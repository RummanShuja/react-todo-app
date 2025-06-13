import { useState } from 'react'
import Nav from './Nav.jsx';
import Container from './Container.jsx';

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <Nav/>
      <Container/>
    </div>
  )
}

export default App
