import React from 'react'
import { DiscType } from '../models/DiscType'

type AlbumImageProps = {
  disc: DiscType
}
export const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  return (
    <>
      <img
        src={props.disc.image}
        alt={props.disc.albumTitle}
        height={props.disc.isCD ? props.disc.maxWidth * 2 : props.disc.maxWidth * 2 * 1.29}
        width={props.disc.maxWidth * 2}
      />
    </>
  )
}
