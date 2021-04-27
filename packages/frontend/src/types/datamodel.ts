export type User = {
  id: string
  email: string
  password: string
  name: string
  role: Role
  posts?: Post[]
}

export type Post = {
  id: string
  title: string
  body: string
  picture?: string
  published?: boolean
  category: Category
  author?: User
  createdAt: Date
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum Category {
  FOOD = 'FOOD',
  ANIMALS = 'ANIMALS',
  TRAVEL = 'TRAVEL',
  SCHOOL = 'SCHOOL',
  IT = 'IT',
}
