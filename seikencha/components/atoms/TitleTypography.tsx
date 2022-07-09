import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

type TitleTypographyProps = {
  title: string
  fontSize?: number
  key?: number
}
export const TitleTypography: React.FC<TitleTypographyProps> = (props) => {
  return (
    <Box display='flex' my={3}>
      <Typography
        key={props.key}
        sx={{
          fontWeightBold: 'FontWeight',
          fontSize: props.fontSize ? props.fontSize : 40,
          fontFamily: 'serif',
          color: '#542218',
          whiteSpace: 'nowrap'
        }}>
        {props.title}
      </Typography>
    </Box>
  )
}
