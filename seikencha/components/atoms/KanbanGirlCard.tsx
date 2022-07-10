import { Box, Card, CardMedia, Link } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { discs } from '../models/DiscType'
import { TopAlbumImage } from './TopAlbumImage'

type KanbanGirlCardProps = {
  height?: number
}
export const KanbanGirlCard: React.FC<KanbanGirlCardProps> = (props) => {
  return (
    <Carousel
      animation="fade"
      navButtonsAlwaysVisible >
      {
        discs.filter((disc) => disc.isInCarousel).map((disc, index) => (
          <>
            <Box display='flex' justifyContent='center'>
              <Link href={`discography/detail/${disc.id}`}>
                <TopAlbumImage
                  disc={disc}
                  height={props.height ? (props.height - 40) : 100} />
              </Link>
            </Box>
          </>
        ))
      }
    </Carousel>
  )
}
