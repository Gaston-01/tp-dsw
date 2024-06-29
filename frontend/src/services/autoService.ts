/*
// src/services/autoService.ts
import axios from 'axios';
import { Auto } from '../types/Auto';

const API_URL = 'http://localhost:3000/api/autos';

export const getAutos = async (): Promise<Auto[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createAuto = async (auto: Auto): Promise<Auto> => {
  const response = await axios.post(API_URL, auto);
  return response.data;
};

export const updateAuto = async (id: string, auto: Auto): Promise<Auto> => {
  const response = await axios.put(`${API_URL}/${id}`, auto);
  return response.data;
};

export const deleteAuto = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

*/