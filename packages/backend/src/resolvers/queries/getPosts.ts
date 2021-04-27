import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

import { Post } from '.prisma/client'

export default async (req: Request, res: Response, next: NextFunction) => {
  const search = req?.query?.search?.toString()

  const whereString = !!search ? `category = '${search}' AND` : ''
  const queryString = `SELECT * FROM "Post" WHERE ${whereString} published = true;`

  await res.locals.prisma
    .$queryRaw(queryString)
    .then((posts: Post[]) => res.status(StatusCodes.OK).json(posts))
    .catch((err: any) => res.status(StatusCodes.BAD_REQUEST).json(err))
}
