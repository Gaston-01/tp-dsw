/*import { Router } from 'express';
import {
  getTipoAutos,
  getTipoAuto,
  createTipoAuto,
  updateTipoAuto,
  deleteTipoAuto,
} from './tipoAuto.controler';

const router = Router();

router.get('/tipoAutos', getTipoAutos);
router.get('/tipoAutos/:id', getTipoAuto);
router.post('/tipoAutos', createTipoAuto);
router.put('/tipoAutos/:id', updateTipoAuto);
router.delete('/tipoAutos/:id', deleteTipoAuto);

export default router;
*/ 
// src/tipoAuto/tipoAuto.routes.ts
import { Router } from 'express';
import { TipoAutoControler } from './tipoAuto.controler.js';

const tipoAutoRouter = Router();
const tipoAutoControler = new TipoAutoControler();

tipoAutoRouter.get('/', tipoAutoControler.getAll.bind(tipoAutoControler));
tipoAutoRouter.get('/:id', tipoAutoControler.getOne.bind(tipoAutoControler));
tipoAutoRouter.post('/', tipoAutoControler.create.bind(tipoAutoControler));
tipoAutoRouter.put('/:id', tipoAutoControler.update.bind(tipoAutoControler));
tipoAutoRouter.delete('/:id', tipoAutoControler.delete.bind(tipoAutoControler));

export default tipoAutoRouter;
