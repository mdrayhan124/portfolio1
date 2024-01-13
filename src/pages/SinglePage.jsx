import React from 'react'
import Container from '../components/Container'

const SinglePage = ({children,className}) => {
  return (
    <Container>
        <div className={className}>
            {children}
        </div>
    </Container>
  )
}

export default SinglePage