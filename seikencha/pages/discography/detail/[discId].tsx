import { Box, Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AlbumImage } from '../../../components/atoms/AlbumImage'
import { DescTypography } from '../../../components/atoms/DescTypography'
import { EventNameBox } from '../../../components/atoms/EventNameBox'
import { TitleTypography } from '../../../components/atoms/TitleTypography'
import useWindowSize from '../../../components/hooks/useWindowSize'
import { discs } from '../../../components/models/DiscType'
import { Header } from '../../../components/organisms/Header'
import { SeikenchaAppBar } from '../../../components/organisms/SeikenchaAppBar'
import { SongsCard } from '../../../components/organisms/SongsCard'


const Detail: React.FC = () => {
  const router = useRouter()
  const { discId } = router.query;
  const discIdNumber = (typeof discId === 'string') ? parseInt(discId) : 0
  const discDetail = discs.find((disc) => disc.id === discIdNumber)
  const windowSize = useWindowSize()
  useEffect(() => {
    if (!discDetail && discId) {
      router.replace('/discography')
    }
  }, [discDetail, discId, router])
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
                columns={{ xs: 3, sm: 3, md: 12 }}>
                <Grid item xs={4}>
                  <Box pt={4} ml={(windowSize.width && windowSize.width >= 440) ? 2 : 0}>
                    <AlbumImage
                      disc={discDetail}
                      width={440} />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box px={4}>
                    {discDetail.eventName && (
                      <Box mt={4}>
                        <EventNameBox eventName={discDetail.eventName} />
                      </Box>
                    )}
                    <Box ml={2}>
                      <TitleTypography
                        title={discDetail.albumTitle}
                      />
                      <Box display='flex'>
                        {
                          discDetail.releaseNumber &&
                          (<>
                            <DescTypography
                              description={discDetail.releaseNumber}
                              fontSize={12}
                            />
                            <Box ml={2} />
                          </>)
                        }
                        <DescTypography
                          description={discDetail.releaseDate + ' released'}
                          fontSize={12}
                        />
                      </Box>
                      <Box mt={4} />
                      <DescTypography
                        description={discDetail.description}
                      />
                      <Box mt={2} />
                      <SongsCard songs={discDetail.songTitles} />
                      <Box mt={4} />
                      <Button
                        variant='contained'
                        href={discDetail.specialUrl}>
                        特設サイト
                      </Button>
                      <Box mt={2} />
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
                    </Box>
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