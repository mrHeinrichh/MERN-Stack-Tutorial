import express from 'express'

const router = express.Router()

import { signup } from '../controllers/user.js'
import { signin } from '../controllers/user.js'

router.post('/signup', signup)
router.post('/signin', signin)

export default router
