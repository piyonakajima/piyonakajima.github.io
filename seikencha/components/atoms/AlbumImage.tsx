import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { DiscType } from '../models/DiscType'

type AlbumImageProps = {
  disc: DiscType
  width: number
}
export const AlbumImage: React.FC<AlbumImageProps> = (props) => {
  const windowSize = useWindowSize()
  return (
    <>
      <img
        src={props.disc.image}
        alt={props.disc.albumTitle}
        width={(windowSize.width && props.width < windowSize.width) ? props.width : windowSize.width}
        height='auto'
      />
    </>
  )
}
