import { Request, Response, NextFunction } from 'express';
import { ObjectId } from '@mikro-orm/mongodb'; // Importa ObjectId desde el paquete del controlador
import { Character } from './character.entity.js';
import { orm } from '../shared/db/orm.js';

const em = orm.em;

function sanitizeCharacterInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body.sanitizedInput = {
    name: req.body.name,
    //characterClass: req.body.characterClass,
    //characterClass: new ObjectId(req.body.characterClass), // Convierte characterClass a ObjectId
    characterClass: new ObjectId(String(req.body.characterClass)), // Convierte characterClass a ObjectId
    //characterClass: req.body.characterClass.map((id: string) => new ObjectId(id)), // Convierte cada id de characterClass a ObjectId / lo hice yo ni idea che
    level: req.body.level,
    hp: req.body.hp,
    mana: req.body.mana,
    attack: req.body.attack,
    //items: req.body.items,
    items: req.body.items.map((id: string) => new ObjectId(id)), // Convierte cada id de item a ObjectId
  }
  //more checks here

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

async function findAll(req: Request, res: Response) {
  try { 
    const characters = await em.find(
      Character,
      {}, 
      { populate: ['characterClass', 'items'] }
    )
    res.status(200).json({ message: 'found all characters', data: characters })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const character = await em.findOneOrFail(
      Character,
      { _id: id }, // Busca por ObjectId
      { populate: ['characterClass', 'items'] }
    )
    res.status(200).json({ message: 'found character', data: character })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const character = em.create(Character, req.body.sanitizedInput)
    await em.flush()
    res.status(201).json({ message: 'character created', data: character })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const characterToUpdate = await em.findOneOrFail(Character, { _id: id }) // Busca por ObjectId
    em.assign(characterToUpdate, req.body.sanitizedInput)
    await em.flush()
    res
      .status(200)
      .json({ message: 'character updated', data: characterToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = new ObjectId(req.params.id); // Crea una nueva instancia de ObjectId
    const character = await em.findOneOrFail(Character, { _id: id }) // Busca por ObjectId
    await em.removeAndFlush(character)
    res.status(200).send({ message: 'character deleted' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { sanitizeCharacterInput, findAll, findOne, add, update, remove }
