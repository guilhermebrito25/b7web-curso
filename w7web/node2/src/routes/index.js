import Router from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('home01');
});

router.get('/sobre', (req, res) => {
    res.send('sobre fsdfsdf')
});

router.get('/contato', (req, res) => {
    res.send('contato fshdjfkhdsjf')
});

export default router;

