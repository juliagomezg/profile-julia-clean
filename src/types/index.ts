export interface Stat {
  n: string
  label: string
}

export interface Discipline {
  num: string
  l1: string
  l2: string
  text: string
}

export interface Project {
  num: string
  title: string
  text: string
  meta: string
  status: string
  // Sin href, la fila se muestra con "—" y sin hover
  href?: string
}

export interface ProjectGroup {
  label: string
  items: Project[]
}

export interface MediaItem {
  num: string
  kind: string
  title: string
  text: string
  cta: string
  href: string
}

export interface NavLink {
  href: string
  label: string
}
