import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import { SeikenchaAppBar } from '../components/organisms/SeikenchaAppBar'
import { ArtistTitle } from '../components/atoms/ArtistTitle'
import { KanbanGirlCard } from '../components/atoms/KanbanGirlCard'
import useWindowSize from '../components/hooks/useWindowSize'
import { Header } from '../components/organisms/Header'
const Home: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { height } = useWindowSize()
  return (
    <>
      <div >
        <Header />
        <main>
          <SeikenchaAppBar />
          <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
            <Grid item xs={8}>
              <KanbanGirlCard height={height ? height - 60 : undefined} />
            </Grid>
            <Grid item xs={4}>
              {!isMobile && <Box display='flex' mt={65} />}
              <ArtistTitle />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  )
}

export default Home
