import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Seguro } from './seguro.entity.js';

export class SeguroControler {
  async getAll(req: Request, res: Response) {
    const seguros = await orm.em.find(Seguro, {});
    res.json(seguros);
  }

  async getOne(req: Request, res: Response) {
    const seguro = await orm.em.findOne(Seguro, req.params.id);
    if (!seguro) {
      return res.status(404).json({ message: 'Seguro not found' });
    }
    res.json(seguro);
  }

  async create(req: Request, res: Response) {
    const seguro = orm.em.create(Seguro, req.body);
    await orm.em.persistAndFlush(seguro);
    res.status(201).json(seguro);
  }

  async update(req: Request, res: Response) {
    const seguro = await orm.em.findOne(Seguro, req.params.id);
    if (!seguro) {
      return res.status(404).json({ message: 'Seguro not found' });
    }
    orm.em.assign(seguro, req.body);
    await orm.em.persistAndFlush(seguro);
    res.json(seguro);
  }

  async delete(req: Request, res: Response) {
    const seguro = await orm.em.findOne(Seguro, req.params.id);
    if (!seguro) {
      return res.status(404).json({ message: 'Seguro not found' });
    }
    await orm.em.removeAndFlush(seguro);
    res.status(204).end();
  }
}
