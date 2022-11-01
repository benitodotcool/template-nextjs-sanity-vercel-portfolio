export type AuthorProps = {
  name: string
  picture: any
}

export type PostProps = {
  title: string
  coverImage: any
  date: string
  excerpt?: string
  author: AuthorProps
  slug?: string
  content?: any
}
