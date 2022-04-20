var express = require('express');
var app = express();
app.use(express.json())

var alunos = [
    {nome: "Maria", idade: 15, sexo:'F'},
    {nome: "João", idade: 16, sexo:'M'},
    {nome: "Francisco", idade:17, sexo:'M'}
]


app.get('/', (req, res) => {
    res.status(200).json(alunos);
})


app.listen(3000, () =>{
    console.log("servidor ligado")
})




