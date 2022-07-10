import { Box, Typography } from '@mui/material'
import React from 'react'
type EventNameBoxProps = {
  eventName: string
}

export const EventNameBox: React.FC<EventNameBoxProps> = (props) => {
  return (
    <Box
      sx={{ backgroundColor: 'black', color: 'white', width: 100, textAlign: 'center' }}
    >
      <Typography>
        {props.eventName}
      </Typography>
    </Box>
  )
}
