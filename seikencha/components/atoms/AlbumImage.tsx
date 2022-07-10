import React from 'react'
import { DiscType } from '../models/DiscType'

type AlbumImageProps = {
  disc: DiscType
  width: number // 220 * 2 = 440 TODO remove
}
export const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  return (
    <>
      <img
        src={props.disc.image}
        alt={props.disc.albumTitle}
        height={props.disc.isCD ? props.width : props.width * 1.29}
        width={props.width}
      />
    </>
  )
}
