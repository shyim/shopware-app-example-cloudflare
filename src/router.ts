import { Router } from 'itty-router'
import { moduleInfo } from './routes/module'
import { authorize, authorizeCallback } from './routes/registration'
import { onProductWritten } from './routes/webhook'

const router = Router()

// Required api calls
router.get('/authorize', authorize)
router.post('/authorize/callback', authorizeCallback)

// Listen on webhook. Is registered in manifest.xml for shopware to be called
router.post('/webhook/product.written', onProductWritten)

// Module page in Shopware
router.get('/module/info', moduleInfo)


router.all('*', () => new Response('Not found', {status: 404}));

export default router