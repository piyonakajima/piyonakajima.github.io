import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { ArtistTitle } from '../../../components/atoms/ArtistTitle'
import { KanbanGirlCard } from '../../../components/atoms/KanbanGirlCard'
import { TitleTypography } from '../../../components/atoms/TitleTypography'
import { discs } from '../../../components/models/DiscType'
import { Header } from '../../../components/organisms/Header'
import { SeikenchaAppBar } from '../../../components/organisms/SeikenchaAppBar'

const Detail: React.FC = () => {
  const router = useRouter()
  const { discId } = router.query;
  const discIdNumber = (typeof discId === 'string') ? parseInt(discId) : 1
  return (
    <>
      <div >
        <Header />
        <main>
          <SeikenchaAppBar />
          <TitleTypography title={discs[discIdNumber].title} />
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

export default Detail