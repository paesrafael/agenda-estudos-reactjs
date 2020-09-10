import styled from 'styled-components'

const Container = styled.section`
  .cardItem {
    margin: 0 0.5% 25px 0.5%;
    width: 32.3%;
    display: inline-block;
    vertical-align: middle;

    .card-title {
      margin: 0 0 10px 0;
    }

    &.card.border-primary {
      border-color: var(--secondary) !important;
    }

    @media(max-width: 995px) {
      margin: 0;
      margin-bottom: 25px;
      width: 100%;
    }
  }
`

export { Container }
