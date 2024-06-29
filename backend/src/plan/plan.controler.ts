import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Plan } from './plan.entity.js';

export class PlanControler {
  async getAll(req: Request, res: Response) {
    const planes = await orm.em.find(Plan, {});
    res.json(planes);
  }

  async getOne(req: Request, res: Response) {
    const plan = await orm.em.findOne(Plan, req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.json(plan);
  }

  async create(req: Request, res: Response) {
    const plan = orm.em.create(Plan, req.body);
    await orm.em.persistAndFlush(plan);
    res.status(201).json(plan);
  }

  async update(req: Request, res: Response) {
    const plan = await orm.em.findOne(Plan, req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    orm.em.assign(plan, req.body);
    await orm.em.persistAndFlush(plan);
    res.json(plan);
  }

  async delete(req: Request, res: Response) {
    const plan = await orm.em.findOne(Plan, req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    await orm.em.removeAndFlush(plan);
    res.status(204).end();
  }
}
