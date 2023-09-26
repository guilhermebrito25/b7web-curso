import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('home')
})

router.get('/contato', (req: Request, res: Response) => {
    res.send('form')
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send('historia')
})

export default router;
