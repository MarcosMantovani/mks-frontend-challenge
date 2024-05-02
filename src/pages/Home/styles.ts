import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  min-height: calc(100vh - 31px);
  padding-top: 160px;

  @media (max-width: ${breakpoints.desktop}) {
    padding-bottom: 48px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 66px;
    padding-bottom: 38px;
  }
`
