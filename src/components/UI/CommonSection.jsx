import React from 'react'
import { Container } from 'reactstrap'
import '../../styles/commo.css'
const CommonSection = ({title}) => {
  return (
    <section className="Common__Section">
<Container className='text-center'>
  <h1>{title}</h1>
</Container>
    </section>
  )
}

export default CommonSection