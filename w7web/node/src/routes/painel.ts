import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('home painel')
})

router.get('/noticias', (req: Request, res: Response) => {
    res.send('noticias cadastradas')
})

export default router;