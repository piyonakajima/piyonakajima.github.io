export type DiscType = {
  id: number,
  albumTitle: string
  songTitles: string[]
  eventName?: string
  releaseNumber?: string
  releaseDate: string
  description: string
  topImage?: string
  image: string
  alt: string
  specialUrl: string
  downloadUrl?: string
  packageUrl?: string
  isCD?: boolean
  isInCarousel?: boolean
}
export const discs: DiscType[] = [
  {
    id: 4,
    albumTitle: '螢火を灯す',
    songTitles: [
      '螢火を灯す',
      '螢火を灯す～Piano arr.～',
      '螢火を灯す(Instrumental)'
    ],
    eventName: 'M3-2021春',
    releaseNumber: '4th Album',
    releaseDate: '2021.10.31',
    description: 'もう誰にも委ねない。独りで全部決められるから── \n\
大切な人との決別。前に進む強い意志。  \n\
和と憂いをモチーフに紡ぐピアノボーカルユニット正弦鍵盤茶屋１年ぶりの新作！\n\
ピアノと正弦波が織りなす「螢火を灯す」配信開始。\n\
    \n\
    作詞作曲編曲：ずんだちきん\n\
    ボーカル：nononore\n\
    イラスト：ノーコピーライトガール様',
    topImage: '/image/albumsTop/4th_top.jpeg',
    image: '/image/albums/4thal.jpeg',
    alt: '4th',
    specialUrl: 'https://seikencha-4th.tumblr.com/',
    downloadUrl: 'https://seikencha.booth.pm/items/3357537',
    isCD: true,
    isInCarousel: true
  },
  {
    id: 3,
    albumTitle: 'ふわり舞い散る花びらのように',
    songTitles: [
      '通りゃんせ',
      '潮解',
      '嘆',
      'ふわり舞い散る花びらのように',
      '麻糸の誓い',
      '昇',
      '落花流水～Piano ver.～',
      '星の雫～Piano ver.～'
    ],
    eventName: 'M3-2020秋',
    releaseNumber: '3rd Album',
    releaseDate: '2020.10.25',
    description: '今年もまた会いに来たよ\n\
決して交わらない二人の世界、忘れられない想いが今蘇る。\n\
和と憂いをモチーフに紡ぐピアノボーカルユニット正弦鍵盤茶屋の第三作！\n\
叶わなかった恋を唄う「潮解」、和楽器の箏の音色を取り入れた「ふわり舞い散る花びらのように」、 \n\
優しく包み込むような「麻糸の誓い」他全８曲入。',
    topImage: '/image/albumsTop/3rd_top.jpeg',
    image: '/image/albums/3rdal.jpeg',
    alt: '3rd',
    specialUrl: 'https://seikencha-3rd.tumblr.com/',
    packageUrl: 'https://seikencha.booth.pm/items/2458876',
    downloadUrl: 'https://seikencha.booth.pm/items/2912516',
    isInCarousel: true
  },
  {
    id: 2,
    albumTitle: '星の雫',
    songTitles: [
      '星の雫 Guest Vocal:rin',
      '空蝉が哭く',
      '沈',
      '溶',
      '温'
    ],
    releaseNumber: '2nd Album',
    eventName: 'M3-2020春',
    releaseDate: '2020.03.01',
    description: '繋いだ手の中に隠した、私と貴女だけの物語------\n\
物悲しく儚いピアノが綴る女性ツインボーカル曲「星の雫」、 \n\
弦楽器とオルガンが織り成す哀愁溢れる女性ボーカル曲「空蝉が哭く」他全５曲入\n\
    ',
    topImage: '/image/albumsTop/2nd_top.png',
    image: '/image/albums/2ndal.png',
    alt: '2nd',
    specialUrl: 'https://seikencha.tumblr.com/',
    downloadUrl: 'https://seikencha.booth.pm/items/1856719',
    packageUrl: 'https://seikencha.booth.pm/items/1868137',
    isInCarousel: true
  },
  {
    id: 1,
    albumTitle: '落花流水',
    songTitles: [
      '序',
      '落花流水',
      '生贄のダンス',
      '間',
      'confession',
      '名前のない未来',
      '綴'
    ],
    releaseNumber: '1st Album',
    eventName: 'M3-2019秋',
    releaseDate: '2019.10.27',
    description: '闇と憂い、和をテーマに描いたピアノ＆女性ボーカルアルバム。\n\
​\n\
和を感じさせるピアノとコーラスワークが映えるバラードナンバー「落花流水」\n\
無機質なリズムトラックに民族的な調和を奏でる「生贄のダンス」\n\
6/8拍子のリズムに乗ったピアノとストリングスが美しい「confession」\n\
けだるい日常を前向きなメロディにのせた「名前のない未来」\n\
全曲をメドレー形式で演奏するピアノインスト「間」他全７曲を収録。\n\
​\n\
抹茶を飲みながら和菓子を食べたくなること、間違いなし！\n\
2019.10.27@M3-2019秋サ-01aにて頒布しました。',
    image: '/image/albums/1stal.png',
    alt: '1st',
    specialUrl: 'https://seikencha.wixsite.com/seikencha',
    downloadUrl: 'https://seikencha.booth.pm/items/1647493',
    packageUrl: 'https://seikencha.booth.pm/items/1647541',
  }
]