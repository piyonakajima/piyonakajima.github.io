import { Button, Typography } from '@mui/material'
import React from 'react'

type SeikenchaButtonProps = {
  title: string
  url?: string
}
export const SeikenchaButton: React.FC<SeikenchaButtonProps> = (props) => {
  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: '#542218',
        color: 'white',
        '&:hover': {
          backgroundColor: '#35150F',
          color: 'white',
        },
      }}
      href={props.url}>
      <Typography
        sx={{
          fontWeightBold: 'FontWeight',
          fontFamily: 'serif',
          whiteSpace: 'pre-wrap',
        }}
      >
        {props.title}
      </Typography>
    </Button>
  )
}
