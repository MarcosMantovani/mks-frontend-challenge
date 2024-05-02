import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 218px;
  height: 300px;
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }
`

export const Photo = styled.img`
  max-height: 138px;
  height: 138px;
`

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 4px;

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    padding: 0 8px;
    background-color: ${colors.priceGray};
    border-radius: 5px;

    font-size: 15px;
    line-height: 15px;
    font-weight: 700;
    color: ${colors.white};
  }
`

export const Description = styled.p`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  column-gap: 14px;
  background-color: ${colors.blue};
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 0px 0px 8px 8px;

  cursor: pointer;

  .priceText {
    color: ${colors.white};
    font-variant-numeric: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`
