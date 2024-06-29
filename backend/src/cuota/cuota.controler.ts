import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Cuota } from './cuota.entity.js';

export class CuotaControler {
  async getAll(req: Request, res: Response) {
    const cuotas = await orm.em.find(Cuota, {});
    res.json(cuotas);
  }

  async getOne(req: Request, res: Response) {
    const cuota = await orm.em.findOne(Cuota, req.params.id);
    if (!cuota) {
      return res.status(404).json({ message: 'Cuota not found' });
    }
    res.json(cuota);
  }

  async create(req: Request, res: Response) {
    const cuota = orm.em.create(Cuota, req.body);
    await orm.em.persistAndFlush(cuota);
    res.status(201).json(cuota);
  }

  async update(req: Request, res: Response) {
    const cuota = await orm.em.findOne(Cuota, req.params.id);
    if (!cuota) {
      return res.status(404).json({ message: 'Cuota not found' });
    }
    orm.em.assign(cuota, req.body);
    await orm.em.persistAndFlush(cuota);
    res.json(cuota);
  }

  async delete(req: Request, res: Response) {
    const cuota = await orm.em.findOne(Cuota, req.params.id);
    if (!cuota) {
      return res.status(404).json({ message: 'Cuota not found' });
    }
    await orm.em.removeAndFlush(cuota);
    res.status(204).end();
  }
}
