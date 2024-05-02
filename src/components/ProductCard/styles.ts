import styled from 'styled-components'

import { colors } from '../../styles'
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 218px;
  height: 285px;
  background-color: ${colors.white};
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`

export const Photo = styled.div`
  height: 138px;
  width: 172px;
  margin-bottom: 16px;

  .image {
    width: 100%;
    margin: 0 auto;
    object-fit: contain;
    max-height: 138px;
    max-width: 172px;
  }
`

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 4px;

  .name {
    max-height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

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
  display: flex;
  align-items: end;
  height: 100%;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`

export const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  column-gap: 14px;
  background-color: ${colors.blue};
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 0px 0px 8px 8px;

  cursor: pointer;

  .icon {
    width: 15px;
    height: 18px;
  }

  .priceText {
    color: ${colors.white};
    font-variant-numeric: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`
