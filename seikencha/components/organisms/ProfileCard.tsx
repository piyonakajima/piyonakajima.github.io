import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { TwitterLinkIcon } from '../molecules/TwitterLinkIcon'

type ProfileCardProps = {
  name: string,
  description: string,
  image: string,
  alt: string,
  twitterUrl: string
}
export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontWeightBold: 'FontWeight',
            fontSize: 18,
            fontFamily: 'serif',
            color: '#542218',
          }}>
          {props.name}
        </Typography>
        <Typography
          sx={{
            fontWeightBold: 'FontWeight',
            fontSize: 14,
            fontFamily: 'serif',
            color: '#542218',
          }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <TwitterLinkIcon url={props.twitterUrl} />
      </CardActions>
    </Card>
  )
}
