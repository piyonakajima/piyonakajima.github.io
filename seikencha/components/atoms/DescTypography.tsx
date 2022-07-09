import { Typography } from '@mui/material'
import React from 'react'

type DescTypographyProps = {
  description: string
  fontSize?: number
}
export const DescTypography: React.FC<DescTypographyProps> = (props) => {
  return (
    <Typography
      sx={{
        fontWeightBold: 'FontWeight',
        fontSize: props.fontSize ? props.fontSize : 18,
        fontFamily: 'serif',
        color: '#542218',
      }}>
      {props.description}
    </Typography>
  )
}
