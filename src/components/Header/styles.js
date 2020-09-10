import styled from 'styled-components'

const Container = styled.header`
  padding: 20px;
  background-color: var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.h1`
  svg {
    margin-left: 10px;
  }
`

export {
  Container, Text,
}
