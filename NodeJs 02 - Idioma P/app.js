const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8888;


app.use(bodyParser.json());


function traducirAP(frase) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let traduccion = '';

    for (let letra of frase) {
        if (vocales.includes(letra.toLowerCase())) {
            traduccion += 'p' + letra.toLowerCase() + 'p';
        } else {
            traduccion += letra;
        }
    }

    return traduccion;
}


app.post('/traducir', (req, res) => {
    const frase = req.body.frase;
    const traduccion = traducirAP(frase);
    res.json({ traduccion: traduccion });
});

app.listen(PORT, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});