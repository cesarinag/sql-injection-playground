import { PrismaClient } from '@prisma/client'
import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { corsOptions } from '@/config/cors'
import { posts } from '@/routes'

const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT

app.disable('x-powered-by')
app.set('trust proxy', 1)

app.use(express.json())
app.use(cors(corsOptions))
app.use(helmet())

const middleware = (req: Request, res: Response, next: NextFunction) => {
  res.locals = { prisma }
  next()
}

app.use(middleware)

app.use('/posts', posts)

app.listen(port, () => console.log(`🚀 Server listening on port ${port}.`))
