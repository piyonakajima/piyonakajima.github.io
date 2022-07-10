import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import { DiscType } from '../models/DiscType'

type AlbumImageProps = {
  disc: DiscType
  height: number
}
export const TopAlbumImage: React.FC<AlbumImageProps> = (props) => {
  const windowSize = useWindowSize()
  return (
    <>
      <img
        src={props.disc.topImage}
        alt={props.disc.albumTitle}
        width='auto'
        height={(windowSize.height && props.height < windowSize.height) ? props.height : (windowSize.height! - 60)}
      />
    </>
  )
}
