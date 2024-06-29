/*
// src/hooks/useAuto.tsx
import { useState, useEffect } from 'react';
import { getAutos, createAuto, updateAuto, deleteAuto } from '../services/autoService';
import { Auto } from '../types/Auto';

export const useAuto = () => {
  const [autos, setAutos] = useState<Auto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAutos = async () => {
      const data = await getAutos();
      setAutos(data);
      setLoading(false);
    };

    fetchAutos();
  }, []);

  const addAuto = async (auto: Auto) => {
    const newAuto = await createAuto(auto);
    setAutos([...autos, newAuto]);
  };

  const editAuto = async (id: string, auto: Auto) => {
    const updatedAuto = await updateAuto(id, auto);
    setAutos(autos.map((a) => (a.id === id ? updatedAuto : a)));
  };

  const removeAuto = async (id: string) => {
    await deleteAuto(id);
    setAutos(autos.filter((a) => a.id !== id));
  };

  return { autos, loading, addAuto, editAuto, removeAuto };
};

*/