import styled from 'styled-components'

export const PrimeVideoContainer = styled.div`
  background-color: #000000;
  padding-bottom: 32px;
  min-height: 100vh;
`

export const Image = styled.img`
  width: 100%;
`

export const MoviesContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 1120px;
  }
`

export const MoviesHeading = styled.h1`
  color: #f3faaa;
  font-size: 25px;
  font-family: 'sans-serif';
  font-weight: 800;
  line-height: 1.5;
  margin-top: 39px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`