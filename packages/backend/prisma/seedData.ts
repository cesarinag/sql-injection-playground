import { Role, Category } from '@prisma/client'

export const usersWithPosts = [
  {
    email: 'admin@example.com',
    password: '15wdfw745ws862svh',
    name: 'Admin',
    role: Role.ADMIN,
  },
  {
    email: 'johndoe@example.com',
    password: 'my53CretPassword',
    name: 'John Doe',
    posts: {
      create: [
        {
          title: 'How to become full-stack developer',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.IT,
        },
        {
          title: 'My vacation in Las Vegas',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.TRAVEL,
        },
        {
          title: 'How to cut onion',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.FOOD,
        },
        {
          title: 'Slovak school system',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.SCHOOL,
        },
      ],
    },
  },
  {
    email: 'janedoe@example.com',
    password: 'password',
    name: 'Jane Doe',
    posts: {
      create: [
        {
          title: 'Best Visual Studio Code extensions',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.IT,
        },
        {
          title: 'Last summer in Mexico',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.TRAVEL,
        },
        {
          title: 'Best pancakes in the world',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.FOOD,
        },
        {
          title: 'My little cat',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.ANIMALS,
          published: false,
        },
        {
          title: 'How to train your dog',
          body: 'Donec sollicitudin molestie malesuada. Curabitur non nulla.',
          category: Category.ANIMALS,
        },
      ],
    },
  },
]
