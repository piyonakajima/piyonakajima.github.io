import { Box, Button, Grid } from '@mui/material'
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
import { GetStaticPaths, GetStaticProps } from 'next'
import { SeikenchaButton } from '../../../components/molecules/SeikenchaButton'


type PathParams = {
  discId: string;
}
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths:
      discs.map(disc =>
        ({ params: { discId: disc.id.toString() } })
      ),
    fallback: false
  }
}

type PageProps = {
  discId: number
}
export const getStaticProps: GetStaticProps<PageProps> = async context => {
  const { discId } = context.params as PathParams
  const props: PageProps = {
    discId: (typeof discId === 'string') ? parseInt(discId) : 0
  }

  return { props }
}

const Detail: React.FC<PageProps> = (props) => {
  const router = useRouter()
  const discDetail = discs.find((disc) => disc.id === props.discId)
  const windowSize = useWindowSize()
  useEffect(() => {
    if (!discDetail && props.discId) {
      router.replace('/discography')
    }
  }, [discDetail, props.discId, router])
  return (
    <>
      <div >
        <Header />
        <main>
          <SeikenchaAppBar hasBack={true} />
          {discDetail &&
            <>
              <Grid
                justifyContent="center"
                container
                spacing={2}
                columns={{ xs: 3, sm: 3, md: 12 }}>
                <Grid item xs={4}>
                  <Box
                    pt={4}
                    mx={(windowSize.width && windowSize.width >= 440) ? 2 : 0}
                    display='flex'
                    justifyContent='center'>
                    <AlbumImage
                      disc={discDetail}
                      width={375} />
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
                        fontSize={12}
                      />
                      <Box mt={2} />
                      <SongsCard songs={discDetail.songTitles} />
                      <Box mt={4} />
                      <SeikenchaButton
                        title='特設サイト'
                        url={discDetail.specialUrl} />
                      <Box mt={2} />
                      <Box display='flex'>
                        <SeikenchaButton
                          title='DL版を購入'
                          url={discDetail.downloadUrl}
                        />
                        <Box ml={4} />
                        <SeikenchaButton
                          title='CDを購入'
                          url={discDetail.packageUrl} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={4} />
            </>
          }
        </main>
      </div>
    </>
  )
}

export default Detail