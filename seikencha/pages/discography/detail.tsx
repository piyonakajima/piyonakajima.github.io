import { Grid } from '@mui/material'
import React from 'react'
import { ArtistTitle } from '../../components/atoms/ArtistTitle'
import { KanbanGirlCard } from '../../components/atoms/KanbanGirlCard'
import { Header } from '../../components/organisms/Header'
import { SeikenchaAppBar } from '../../components/organisms/SeikenchaAppBar'

const detail = () => {
  return (
    <>
      <div >
        <Header />
        <main>
          <SeikenchaAppBar />
          <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
            <Grid item xs={8}>
              <KanbanGirlCard height={100} />
            </Grid>
            <Grid item xs={4}>
              <ArtistTitle />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  )
}

export default detail