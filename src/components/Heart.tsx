import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
  className: string
}

const Heart: FC<Props> = ({ icon, alt, className }) => {
  return <HeartIcon src={icons[icon]} alt={alt} className={className}/>
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Heart
