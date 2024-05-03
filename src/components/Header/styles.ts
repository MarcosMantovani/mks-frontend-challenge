import styled from 'styled-components'
import { motion } from 'framer-motion'

import { breakpoints, colors } from '../../styles'

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 101px;
  padding: 28px 88px 28px 65px;
  background-color: ${colors.blue};
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    height: 48px;
    padding: 2px 23px 2px 20px;
  }
`

export const Title = styled(motion.h1)`
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    .subtitle {
      font-size: 16px;
    }
  }
`

export const CartButton = styled(motion.button)`
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 45px;
  padding: 0 27px 0 15px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  .cartCounter {
    color: ${colors.black};
    font-weight: 700;
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 52px;
    height: 26px;
    padding: 0 8px 0 9px;

    .cartIcon {
      width: 11px;
      height: 10px;
    }

    .cartCounter {
      font-size: 12px;
    }
  }
`
