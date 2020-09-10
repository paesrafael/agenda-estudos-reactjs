import React from 'react'

import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

import data from './data'

import { Container } from './styles'

export default function StudyCards({ types }) {
  return (
    <Container>
      {!!data && (
        data.filter(filterType => filterType.type === types)
        .map((item) => (
          <Card
            key={item.id}
            className="cardItem"
            border="primary"
          >
            <Card.Body>
              <Card.Title>
                {item.title}
              </Card.Title>

              <Card.Subtitle className="mb-2 text-muted">
                Canal <FontAwesomeIcon icon={faYoutube} /> {item.channel}
              </Card.Subtitle>

              <Card.Text>
                <iframe
                  width="100%"
                  height="340"
                  src={item.link}
                  title={item.title}
                  frameBorder="false"></iframe>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  )
}
