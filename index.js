process.env.PORT = process.env.PORT || 3000;

import express from "express";

const router = express.Router(); 

let movies = [];

router.get('/:id', (req, res) => {    
    // pegar o id que mandamos na requisição
    const { id } = req.params;
    // procurar o filme baseado no id
    const movie = movies.find(m => m.id == id);
    // verificar se o filme foi encontrado
    if (!movie) {
        // caso não tenha sido encontrado retorna 404
        return res.sendStatus(404);
    }
    // caso tenha sido encontrado retorna o filme
    return res.json(body);

    if (movie) {
        return res.sendStatus(404);
    } else {
        return res.json(body);
    }
});

router.post('/', (req, res) => {
    // pega o body que veio na requisição
    const { body } = req;
    // simula a criação no banco 
    movies.push(body);
    console.log(movies)
    // setamos o status do response pra 201 que significa que o registro foi criado
    res.status(201);
    // retornamos o registro criado
    return res.json(body);
});

const app = express();


app.use('/watched',router);

app.listen(process.env.PORT, () => { console.log('API is running'); console.log('listening on: ' + process.env.PORT) });

export default app;