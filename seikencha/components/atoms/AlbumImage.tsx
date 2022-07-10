import React from 'react'
import { DiscType } from '../models/DiscType'

type AlbumImageProps = {
  disc: DiscType
  width: number
}
export const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  return (
    <>
      <img
        src={props.disc.image}
        alt={props.disc.albumTitle}
        width={props.width}
        height='auto'
      />
    </>
  )
}
