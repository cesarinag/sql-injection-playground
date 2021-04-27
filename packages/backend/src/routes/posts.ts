import { Router } from 'express'

import { getPosts } from '@/resolvers/queries'

const router = Router()

router.get('', getPosts)

export default router
