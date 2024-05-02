import styled from 'styled-components'

import { CloseButton as CartCloseButton } from '../Cart/styles'

import { colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 15px 19px 23px;
  background-color: ${colors.white};
  border-radius: 8px;
`

export const MainProductInfo = styled.div`
  display: flex;
  column-gap: 20px;

  .productPhoto {
    max-width: 50px;
  }

  .productName {
    font-size: 13px;
    line-height: 17px;
    width: 113px;
  }
`

export const SecondaryProductInfo = styled.div`
  display: flex;
  column-gap: 40px;

  .productPrice {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
  }
`

export const CartButton = styled.button`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 50px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  background-color: transparent;

  .decrease,
  .quantity,
  .increase {
    border: none;
    background-color: transparent;
    font-size: 8px;
    cursor: pointer;
  }

  .quantity {
    margin: 4px 0;
    border-right: 0.3px solid #bfbfbf;
    border-left: 0.3px solid #bfbfbf;
    cursor: auto;
  }
`

export const CloseButton = styled(CartCloseButton)`
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;

  font-size: 14px;
`
