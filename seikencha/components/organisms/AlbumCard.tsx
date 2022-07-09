import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ShoppingLinkIcon } from '../molecules/ShoppingLinkIcon'

type AlbumCardProps = {
  name: string,
  description: string,
  image: string,
  alt: string,
  specialUrl: string,
  isCD?: boolean,
  maxWidth: number,
  shoppingUrl: string
}
export const AlbumCard: React.FC<AlbumCardProps> = (props) => {

  return (
    <Card sx={{ maxWidth: props.maxWidth }}>
      <CardActionArea
        onClick={() => { console.log('first') }}>
        <CardMedia
          component="img"
          height={props.isCD ? props.maxWidth : props.maxWidth * 1.29}
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              fontWeightBold: 'FontWeight',
              fontSize: props.name.length > 10 ? 13 : 18,
              fontFamily: 'serif',
              color: '#542218',
              whiteSpace: 'nowrap'
            }}>
            {props.name}
          </Typography>
          <Typography
            sx={{
              fontWeightBold: 'FontWeight',
              fontSize: 14,
              fontFamily: 'serif',
              color: '#542218',
              whiteSpace: 'nowrap'
            }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ShoppingLinkIcon url={props.shoppingUrl} />
          <Button
            variant="outlined"
            sx={{ borderColor: '#542218' }}
            href={props.specialUrl}>
            <Typography
              sx={{
                fontWeightBold: 'FontWeight',
                fontSize: 12,
                fontFamily: 'serif',
                color: '#542218',
                whiteSpace: 'nowrap'
              }}>
              特設サイト
            </Typography>
          </Button>
        </CardActions>
      </CardActionArea>
    </Card >
  )
}
