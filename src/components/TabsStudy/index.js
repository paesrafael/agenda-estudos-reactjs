import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import StudyCards from '~/components/StudyCards'

import { Content } from './styles'

export default function TabsStudy() {
  return (
    <Container>
      <Row>
        <Col>
          <Content>
            <Tabs defaultActiveKey="new-classes">
              <Tab eventKey="new-classes" title="Aulas">
                <StudyCards types="new-classes" />
              </Tab>

              <Tab eventKey="watched" title="Assistidas">
                <StudyCards types="watched" />
              </Tab>
            </Tabs>
          </Content>
        </Col>
      </Row>
    </Container>
  )
}
