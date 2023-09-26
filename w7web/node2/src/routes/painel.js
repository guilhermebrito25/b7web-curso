import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('home02')
})

router.get('/contato', (req, res) => {
    res.send('contato 02')
})

router.get('/sobre', (req, res) => {
    res.send('sobre 02')
})

export default router;