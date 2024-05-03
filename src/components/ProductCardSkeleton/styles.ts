import styled from 'styled-components'
import { motion } from 'framer-motion'

import { colors } from '../../styles'

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
`

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 4px;
`

export const Description = styled.p`
  display: flex;
  align-items: end;
  height: 100%;
  line-height: 12px;
`

export const Button = styled(motion.button)`
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 0px 0px 8px 8px;
`
