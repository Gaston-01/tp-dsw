/*import { Router } from 'express';
import {
  getPlanes,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
} from './plan.controler';

const router = Router();

router.get('/planes', getPlanes);
router.get('/planes/:id', getPlan);
router.post('/planes', createPlan);
router.put('/planes/:id', updatePlan);
router.delete('/planes/:id', deletePlan);

export default router;
*/
// src/plan/plan.routes.ts
import { Router } from 'express';
import { PlanControler } from './plan.controler.js';

const planRouter = Router();
const planControler = new PlanControler();

planRouter.get('/', planControler.getAll.bind(planControler));
planRouter.get('/:id', planControler.getOne.bind(planControler));
planRouter.post('/', planControler.create.bind(planControler));
planRouter.put('/:id', planControler.update.bind(planControler));
planRouter.delete('/:id', planControler.delete.bind(planControler));

export default planRouter;

