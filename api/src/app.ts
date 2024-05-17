import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota de exemplo
app.post('/calcular-gasto', (req, res) => {
  // Extrair os dados enviados no corpo da requisição
  const { gastoDiario, gastoSemanal } = req.body;

  // Fazer o cálculo
  const gastoTotal = parseFloat(gastoDiario) * 30 + parseFloat(gastoSemanal) * 4;

  // Retornar o resultado
  res.json({ resultado: gastoTotal });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
