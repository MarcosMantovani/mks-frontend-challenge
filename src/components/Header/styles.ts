import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  padding: 28px 88px 28px 65px;
  background-color: ${colors.blue};
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  color: ${colors.white};

  .subtitle {
    font-size: 20px;
    font-weight: 300;
    color: ${colors.white};
    padding-top: 8px;
  }
`

export const CartButton = styled.button`
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  column-gap: 16px;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  .cartIcon {
    margin-left: 15px;
  }

  .cartCounter {
    color: ${colors.black};
    font-weight: 700;
    font-size: 18px;
  }
`
