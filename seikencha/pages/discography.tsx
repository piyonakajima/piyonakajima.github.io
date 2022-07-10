import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { LogoCard } from '../components/atoms/LogoCard'
import { TitleTypography } from '../components/atoms/TitleTypography'
import { discs } from '../components/models/DiscType'
import { AlbumCard } from '../components/organisms/AlbumCard'
import { SeikenchaAppBar } from '../components/organisms/SeikenchaAppBar'

const discography = () => {
  return (
    <Box>
      <SeikenchaAppBar />
      <Box display='flex' alignItems='center' height={150} >
        <Box ml={4} />
        <LogoCard height={120} />
        <Box ml={4} />
        <TitleTypography title='過去作品' />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
          justifyContent="center"
          spacing={2} columns={{ xs: 7, sm: 8, md: 14 }}>
          {discs.map((disc, index) => {
            return (
              <Grid key={index} item xs={3}>
                <AlbumCard
                  disc={disc}
                  width={220}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box my={6} />
    </Box>
  )
}

export default discography