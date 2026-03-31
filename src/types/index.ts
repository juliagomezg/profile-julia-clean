export interface ProjectType {
  id: number
  title: string
  category: string
  description: string
  image: string
  emoji: string
  link: string
}

export interface StatType {
  number: string
  label: string
  color: string
}

export interface ContactLinkType {
  type: string
  icon: string
  url: string
  bgColor: string
  textColor?: string
}

export interface SpecialtyType {
  name: string
  type: string
} 