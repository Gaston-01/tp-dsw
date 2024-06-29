import { Request, Response } from 'express';
import { ObjectId } from '@mikro-orm/mongodb'; // Importa ObjectId desde el paquete del controlador
import { orm } from '../shared/db/orm.js';
import { CharacterClass } from './characterClass.entity.js';

const em = orm.em;

async function findAll(req: Request, res: Response) {
  try {
    const characterClasses = await em.find(CharacterClass, {});
    res
      .status(200)
      .json({ message: 'found all character classes', data: characterClasses });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const characterClass = await em.findOneOrFail(CharacterClass, { _id: id }); // Busca por ObjectId
    res
      .status(200)
      .json({ message: 'found character class', data: characterClass });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function add(req: Request, res: Response) {
  try {
    const characterClass = em.create(CharacterClass, req.body);
    await em.persistAndFlush(characterClass); // Persiste y actualiza la entidad
    res
      .status(201)
      .json({ message: 'character class created', data: characterClass });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const characterClass = await em.findOneOrFail(CharacterClass, { _id: id }); // Busca por ObjectId
    em.assign(characterClass, req.body);
    await em.flush();
    res.status(200).json({ message: 'character class updated' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const characterClass = await em.findOneOrFail(CharacterClass, { _id: id }); // Busca por ObjectId
    await em.removeAndFlush(characterClass);
    res.status(200).send({ message: 'character class deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
} 

export { findAll, findOne, add, update, remove };
