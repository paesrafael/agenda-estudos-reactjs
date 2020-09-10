import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import ButtonAddStudies from '~/components/ButtonAddStudies'

import { Container, Text } from './styles'

export default function Header() {
  return (
    <Container>
      <Text>
        Agenda Estudos
        <FontAwesomeIcon icon={faUserGraduate} />
      </Text>

      <ButtonAddStudies />
    </Container>
  )
}
