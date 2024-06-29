// src/cuota/cuota.routes.ts
import { Router } from 'express';
import { CuotaControler } from './cuota.controler.js';

const cuotaRouter = Router();
const cuotaControler = new CuotaControler();

cuotaRouter.get('/', cuotaControler.getAll.bind(cuotaControler));
cuotaRouter.get('/:id', cuotaControler.getOne.bind(cuotaControler));
cuotaRouter.post('/', cuotaControler.create.bind(cuotaControler));
cuotaRouter.put('/:id', cuotaControler.update.bind(cuotaControler));
cuotaRouter.delete('/:id', cuotaControler.delete.bind(cuotaControler));

export default cuotaRouter;
