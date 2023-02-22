import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddToCart } from '../components/AddToCart';
import { getVegetablesService } from '../services/getVegetables';
import { photo_src } from '../utils/photo_src';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [vegetable, setVegetable] = useState({});

  useEffect(() => {
    getVegetables();
  }, []);

  const getVegetables = async () => {
    const vegetables = await getVegetablesService();
    const vegetable = vegetables.filter((_vegetable) => _vegetable.id == id);

    if (vegetable.length !== 1) return;

    setVegetable(vegetable[0]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={photo_src(vegetable.photo, vegetable.id)}
            alt="Foto de la verdura elegida"
            className="w-100"
          />
        </div>
        <div className="col-6">
          <p>
            Nombre: <b>{vegetable.name}</b>
          </p>
          <p>
            Descripción: <b>{vegetable.full_description}</b>
          </p>
          <p>
            Cantidad disponibles: <b>{vegetable.stock}</b>
          </p>
          <AddToCart {...vegetable} />
        </div>
      </div>
    </div>
  );
};
