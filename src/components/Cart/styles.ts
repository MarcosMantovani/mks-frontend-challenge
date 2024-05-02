import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type ContainerProps = {
  $isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  width: 486px;
  height: 100vh;
  height: 100svh;
  padding: 36px 54px 0 47px;
  background-color: ${colors.blue};
  z-index: 1;

  .content {
    overflow-y: scroll;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 330px;
    padding: 36px 46px 0 34px;
  }
`

export const Title = styled.h3`
  width: 180px;
  font-size: 27px;
  color: ${colors.white};
  margin-bottom: 64px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 47px;
  right: 33px;
  width: 38px;
  height: 38px;

  background-color: ${colors.black};
  border: none;
  border-radius: 50%;
  color: ${colors.white};
  font-size: 20px;
  line-height: 15px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    color: ${colors.blue};
  }
`

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 156px;
  color: ${colors.white};
  font-size: 28px;
  font-weight: 700;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 108px;
  }
`

export const FinishPurchaseButtoin = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 40px 0;
  background-color: #000000;
  border: none;
  color: ${colors.white};
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 26px 0;
    font-size: 20px;
  }
`

export const CartItemList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`
