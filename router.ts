import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getGreeting } from './controller.ts'

const router = new Router()
router.get('/greet/:name', getGreeting)

export { router }