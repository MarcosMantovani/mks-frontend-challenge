import styled from 'styled-components'

import { CloseButton as CartCloseButton } from '../Cart/styles'

import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 379px;
  height: 95px;
  padding: 19px 15px 19px 23px;
  background-color: ${colors.white};
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    row-gap: 12px;
    width: 250px;
    height: 220px;
    padding: 20px 13px 14px 16px;
  }
`

export const MainProductInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;

  .productPhoto {
    height: 100%;
  }

  .productName {
    font-size: 13px;
    line-height: 17px;
    width: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: space-between;

    .productPhoto {
      object-fit: contain;
      max-height: 120px;
      max-width: 100%;
    }

    .productName {
      font-size: 16px;
      line-height: 19px;
      width: auto;
    }
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

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    width: 100%;

    .productPrice {
      padding: 8px 16px;
      font-size: 15px;
      color: ${colors.white};
      border-radius: 8px;
      background-color: ${colors.priceGray};
    }
  }
`

export const QuantityButton = styled.div`
  position: relative;

  .label {
    position: absolute;
    top: -2em;
    left: 0;

    font-size: 5px;
  }

  .buttons {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    width: 50px;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    background-color: transparent;
  }

  .decrease,
  .quantity,
  .increase {
    border: none;
    background-color: transparent;
    font-size: 8px;
    cursor: pointer;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
    border-right: 0.3px solid #bfbfbf;
    border-left: 0.3px solid #bfbfbf;
    cursor: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .label {
      display: none;
    }

    .buttons {
      width: 98px;
    }

    .decrease,
    .quantity,
    .increase {
      font-size: 20px;
    }
  }
`

export const CloseButton = styled(CartCloseButton)`
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;

  font-size: 14px;

  @media (max-width: ${breakpoints.tablet}) {
    top: 10px;
    right: 14px;
    transform: translate(-50%, +50%);

    font-size: 42px;
    color: ${colors.black};
    background-color: transparent;
  }
`
