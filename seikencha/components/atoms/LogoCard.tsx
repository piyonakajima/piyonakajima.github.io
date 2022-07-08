import React from 'react'
import Image from 'next/image'


type LogoCardProps = {
  height?: number
}
export const LogoCard: React.FC<LogoCardProps> = (props) => {
  return (
    <Image
      src='/image/logo.png'
      alt='制限鍵盤茶屋'
      height={props.height ? props.height : 40}
      width={props.height ? props.height : 40}
    />
  )
}
