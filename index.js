import express from "express";
import cors from "cors";
import  winston from "winston";
import proprietarioRouter from "./routes/proprietario.route.js";
import animalRouter from "./routes/animal.route.js";

//config winston
const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) =>{
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-api.log"})
    ],
    format: combine(
        label({ label: "petshop-api"}),
        timestamp(),
        myFormat
    )

})

//config express e o cors
const app = express();
app.use(express.json());
app.use(cors());

//rota de teste
const route = app.get("/", (req, res, next) =>{
    res.status(200).send({
        title: "PetShop-Api",
        version:"1.0.0"
    })
})

//rotas da api
app.use("/owner", proprietarioRouter);
app.use("/animal", animalRouter);

//Tratamento de erros
app.use((err, req, res, next) =>{
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})


//Iniciando o servidor
app.listen(3000, () => console.log("Servidor rodando"));