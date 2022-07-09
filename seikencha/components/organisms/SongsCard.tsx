import { Box } from '@mui/material'
import React from 'react'
import { DescTypography } from '../atoms/DescTypography'

type SongsCardProps = {
  songs: string[]
}
export const SongsCard: React.FC<SongsCardProps> = (props) => {
  return (
    <Box>
      <DescTypography description='収録楽曲' />
      {props.songs.map((song, index) =>
        <Box key={index}>
          <DescTypography description={(index + 1) + '.' + song} fontSize={15} />
        </Box>
      )}
    </Box>
  )
}
