/*import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Auto } from './auto.entity.js';

export class AutoControler {
  async getAll(req: Request, res: Response) {
    const autos = await orm.em.find(Auto, {});
    res.json(autos);
  }

  async getOne(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id);
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    res.json(auto);
  }

  async create(req: Request, res: Response) {
    const auto = orm.em.create(Auto, req.body);
    await orm.em.persistAndFlush(auto);
    res.status(201).json(auto);
  }

  async update(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id);
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    orm.em.assign(auto, req.body);
    await orm.em.persistAndFlush(auto);
    res.json(auto);
  }

  async delete(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id);
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    await orm.em.removeAndFlush(auto);
    res.status(204).end();
  }
}*/
// src/auto/auto.controler.ts
// src/auto/auto.controler.ts
import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { Auto } from './auto.entity.js';
import { Precio } from '../precio/precio.entity.js';

export class AutoControler {
  async getAll(req: Request, res: Response) {
    const autos = await orm.em.find(Auto, {}, { populate: ['precios'] });
    res.json(autos.map(auto => ({
      ...auto,
      ultimoPrecio: auto.precios.length > 0 ? auto.precios[auto.precios.length - 1] : null
    })));
  }

  async getOne(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id, { populate: ['precios'] });
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    res.json({
      ...auto,
      ultimoPrecio: auto.precios.length > 0 ? auto.precios[auto.precios.length - 1] : null
    });
  }

  async create(req: Request, res: Response) {
    const auto = orm.em.create(Auto, req.body);
    await orm.em.persistAndFlush(auto);
    res.status(201).json(auto);
  }

  async update(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id);
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    orm.em.assign(auto, req.body);
    await orm.em.persistAndFlush(auto);
    res.json(auto);
  }

  async delete(req: Request, res: Response) {
    const auto = await orm.em.findOne(Auto, req.params.id);
    if (!auto) {
      return res.status(404).json({ message: 'Auto not found' });
    }
    await orm.em.removeAndFlush(auto);
    res.status(204).end();
  }
}
