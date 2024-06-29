/*import { Router } from 'express';
import {
  getAutos,
  getAuto,
  createAuto,
  updateAuto,
  deleteAuto,
} from './auto.controler';

const router = Router();

router.get('/autos', getAutos);
router.get('/autos/:id', getAuto);
router.post('/autos', createAuto);
router.put('/autos/:id', updateAuto);
router.delete('/autos/:id', deleteAuto);

export default router;
*/
// src/auto/auto.routes.ts
import { Router } from 'express';
import { AutoControler } from './auto.controler.js';

const autoRouter = Router();
const autoControler = new AutoControler();

autoRouter.get('/', autoControler.getAll.bind(autoControler));
autoRouter.get('/:id', autoControler.getOne.bind(autoControler));
autoRouter.post('/', autoControler.create.bind(autoControler));
autoRouter.put('/:id', autoControler.update.bind(autoControler));
autoRouter.delete('/:id', autoControler.delete.bind(autoControler));

export default autoRouter;

