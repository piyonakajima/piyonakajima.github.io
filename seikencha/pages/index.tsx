import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, ThemeProvider, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SeikenchaAppBar } from '../components/organisms/SeikenchaAppBar'
import FuwariGirl from 'material-ui-image'
import { ArtistTitle } from '../components/atoms/ArtistTitle'
import { KanbanGirlCard } from '../components/atoms/KanbanGirlCard'
import useWindowSize from '../components/hooks/useWindowSize'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
const Home: NextPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { width, height } = useWindowSize()
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
        <Box>
          お知らせ
        </Box>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Home
