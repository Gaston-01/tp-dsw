/*import { Router } from 'express';
import {
  getSeguros,
  getSeguro,
  createSeguro,
  updateSeguro,
  deleteSeguro,
} from './seguro.controler';

const router = Router();

router.get('/seguros', getSeguros);
router.get('/seguros/:id', getSeguro);
router.post('/seguros', createSeguro);
router.put('/seguros/:id', updateSeguro);
router.delete('/seguros/:id', deleteSeguro);

export default router;
*/
// src/seguro/seguro.routes.ts
import { Router } from 'express';
import { SeguroControler } from './seguro.controler.js';

const seguroRouter = Router();
const seguroControler = new SeguroControler();

seguroRouter.get('/', seguroControler.getAll.bind(seguroControler));
seguroRouter.get('/:id', seguroControler.getOne.bind(seguroControler));
seguroRouter.post('/', seguroControler.create.bind(seguroControler));
seguroRouter.put('/:id', seguroControler.update.bind(seguroControler));
seguroRouter.delete('/:id', seguroControler.delete.bind(seguroControler));

export default seguroRouter;

