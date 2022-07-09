import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { DiscType } from '../models/DiscType'
import { ShoppingLinkIcon } from '../molecules/ShoppingLinkIcon'

type AlbumCardProps = {
  disc: DiscType
}
export const AlbumCard: React.FC<AlbumCardProps> = (props) => {
  const id = props.disc.id.toString()
  return (
    <Link href={`/discography/detail/${id}`} >
      <Card sx={{ maxWidth: props.disc.maxWidth }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={props.disc.isCD ? props.disc.maxWidth : props.disc.maxWidth * 1.29}
            image={props.disc.image}
            alt={props.disc.alt}
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                fontWeightBold: 'FontWeight',
                fontSize: props.disc.albumTitle.length > 10 ? 13 : 18,
                fontFamily: 'serif',
                color: '#542218',
                whiteSpace: 'nowrap'
              }}>
              {props.disc.albumTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card >
    </Link >
  )
}
