import { Request, Response } from 'express';
import { orm } from '../shared/db/orm.js';
import { TipoAuto } from './tipoAuto.entity.js';

export class TipoAutoControler {
  async getAll(req: Request, res: Response) {
    const tipos = await orm.em.find(TipoAuto, {});
    res.json(tipos);
  }

  async getOne(req: Request, res: Response) {
    const tipo = await orm.em.findOne(TipoAuto, req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'TipoAuto not found' });
    }
    res.json(tipo);
  }

  async create(req: Request, res: Response) {
    const tipo = orm.em.create(TipoAuto, req.body);
    await orm.em.persistAndFlush(tipo);
    res.status(201).json(tipo);
  }

  async update(req: Request, res: Response) {
    const tipo = await orm.em.findOne(TipoAuto, req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'TipoAuto not found' });
    }
    orm.em.assign(tipo, req.body);
    await orm.em.persistAndFlush(tipo);
    res.json(tipo);
  }

  async delete(req: Request, res: Response) {
    const tipo = await orm.em.findOne(TipoAuto, req.params.id);
    if (!tipo) {
      return res.status(404).json({ message: 'TipoAuto not found' });
    }
    await orm.em.removeAndFlush(tipo);
    res.status(204).end();
  }
}
