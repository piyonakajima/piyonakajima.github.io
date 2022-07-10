import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { DescTypography } from '../../../components/atoms/DescTypography'
import { TitleTypography } from '../../../components/atoms/TitleTypography'
import { discs } from '../../../components/models/DiscType'
import { Header } from '../../../components/organisms/Header'
import { SeikenchaAppBar } from '../../../components/organisms/SeikenchaAppBar'
import { SongsCard } from '../../../components/organisms/SongsCard'


const Detail: React.FC = () => {
  const router = useRouter()
  const { discId } = router.query;
  const discIdNumber = (typeof discId === 'string') ? parseInt(discId) : 0
  const discDetail = discs.find((disc) => disc.id === discIdNumber)

  useEffect(() => {
    if (!discDetail) {
      router.replace('/discography')
    }
  }, [discDetail, router])
  return (
    <>
      <div >
        <Header />
        <main>
          <SeikenchaAppBar />
          {discDetail &&
            <>
              <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid item xs={4}>
                  <img
                    src={discDetail.image}
                    alt={discDetail.albumTitle}
                    height={discDetail.isCD ? discDetail.maxWidth * 2 : discDetail.maxWidth * 2 * 1.29}
                    width={discDetail.maxWidth * 2}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TitleTypography
                    title={discDetail.albumTitle}
                  />
                  <DescTypography
                    description={discDetail.releaseDate + 'released'}
                    fontSize={12}
                  />
                  <Box mt={6} />
                  <DescTypography
                    description={discDetail.description}
                  />
                  <SongsCard songs={discDetail.songTitles} />
                  <Button
                    variant='contained'
                    href={discDetail.specialUrl}>
                    特設サイト
                  </Button>
                  <Box mt={3} />
                  <Box display='flex'>
                    <Button
                      variant='contained'
                      href={discDetail.downloadUrl}>
                      ダウンロード版を購入
                    </Button>
                    <Box ml={4} />
                    <Button
                      variant='contained'
                      href={discDetail.packageUrl}>
                      パッケージ版を購入
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          }
        </main>
      </div>
    </>
  )
}

export default Detail