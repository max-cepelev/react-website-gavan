export interface IProgressData {
  id: number
  name: string
  description: string
  images: string[]
}

export interface ImagesData {
  id: number
  name: string
  images: string[]
}

export interface IProperty {
  id: number
  layout: number
  rooms: number
  layoutName: string
  price: number
  images: string[]
  square: string
  livingRoom: string
  bedroom1: string | null
  bedroom2: string | null
  kitchen: string | null
  hallway: string | null
  bathroom1: string | null
  bathroom2: string | null
  balcony1: string | null
  balcony2: string | null
}
