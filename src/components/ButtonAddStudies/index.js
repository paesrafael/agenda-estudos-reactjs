import React from 'react'

import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

export default function ButtonAddStudies() {
  return (
    <Container>
      <Button variant="primary">
        <FontAwesomeIcon icon={faPlus} /> Add
      </Button>
    </Container>
  )
}
