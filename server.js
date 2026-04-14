const express = require ("express")

const app = express()

function callbackDaRaiz( request, response) {
    response.send("Desafio 100 km 04 de Julho")
}

app.get("/", callbackDaRaiz)
app.listen(3000, () => {
      console.log("API rodando em http://localhost:3000")
})





//app.get("/", (request, reponse) => {
//    response.send("Olá mundo!")
//})

//app.get("/", (request, reponse) {
//    response.send("Olá mundo!")
//}

//app.listen(3000, () => {
//    console.log("Servidor rodando em http://localhost:3000")
//})