import React from 'react'

import Header from '~/components/Header'
import TabsStudy from '~/components/TabsStudy'

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />

      <TabsStudy />
    </Container>
  )
}
