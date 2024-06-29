import 'reflect-metadata';
import express from 'express';
import { orm } from './shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';

import autoRouter from './auto/auto.routes.js';
import tipoAutoRouter from './tipoAuto/tipoAuto.routes.js';
import seguroRouter from './seguro/seguro.routes.js';
import planRouter from './plan/plan.routes.js';
import cuotaRouter from './cuota/cuota.routes.js';
      
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  RequestContext.create(orm.em, next);
});


// Registrar las rutas
app.use('/api/autos', autoRouter);
app.use('/api/tipo-autos', tipoAutoRouter);
app.use('/api/seguros', seguroRouter);
app.use('/api/planes', planRouter);
app.use('/api/cuotas', cuotaRouter);

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
