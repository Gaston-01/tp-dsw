import { Router } from 'express'
import { sanitizeCharacterInput, findAll, findOne, add, update, remove } from './character.controler.js'

export const characterRouter = Router()

characterRouter.get('/', findAll)
characterRouter.get('/:id', findOne)
characterRouter.post('/', sanitizeCharacterInput, add)
characterRouter.put('/:id', sanitizeCharacterInput, update)
characterRouter.patch('/:id', sanitizeCharacterInput, update)
characterRouter.delete('/:id', remove)
//Aca estan las Rutas que servimos y admitimos, con sus parametros de entradas, sus miderwar que sean nesesarios y las funciones que lo utilicen