export type DiscType = {
  title: string
  description: string
  image: string
  alt: string
  specialUrl: string
  shoppingUrl: string
  isCD?: boolean
  maxWidth: number
}
export const discs: DiscType[] = [
  {
    title: '螢火を灯す',
    description: '4th album [M3-2021春]',
    image: '/image/albums/4thal.jpeg',
    alt: '4th',
    specialUrl: 'https://seikencha-4th.tumblr.com/',
    shoppingUrl: 'https://seikencha.booth.pm/items/3357537',
    isCD: true,
    maxWidth: 220
  },
  {
    title: 'ふわり舞い散る花びらのように',
    description: '3rd album [M3-2020秋]',
    image: '/image/albums/3rdal.jpeg',
    alt: '3rd',
    specialUrl: 'https://seikencha-3rd.tumblr.com/',
    shoppingUrl: 'https://seikencha.booth.pm/items/2912516',
    maxWidth: 220
  },
  {
    title: '星の雫',
    description: '2nd album [M3-2020春]',
    image: '/image/albums/2ndal.png',
    alt: '2nd',
    specialUrl: 'https://seikencha.tumblr.com/',
    shoppingUrl: 'https://seikencha.booth.pm/items/1856719',
    maxWidth: 220
  },
  {
    title: '落花流水',
    description: '1st album [M3-2019秋]',
    image: '/image/albums/1stal.png',
    alt: '1st',
    specialUrl: 'https://seikencha.wixsite.com/seikencha',
    shoppingUrl: 'https://seikencha.booth.pm/items/1647493',
    maxWidth: 220
  }
]