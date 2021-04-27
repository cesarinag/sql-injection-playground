import { PrismaClient } from '@prisma/client'

import { usersWithPosts } from './seedData'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.$transaction(
    usersWithPosts?.map((item) =>
      prisma.user.upsert({
        where: { email: item?.email },
        update: {},
        create: item,
      })
    )
  )
}

main()
  .catch((err) => {
    console.log('Seeding error: ', err)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
