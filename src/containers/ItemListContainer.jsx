import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemCard } from '../components/ItemCard';
import { getCategoriesService } from '../services/getCategories';
import { getVegetablesService } from '../services/getVegetables';

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [vegetables, setVegetables] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredVegetables, _setFilteredVegetables] = useState([]);

  useEffect(() => {
    getVegetables();
    getCategories();
  }, []);

  useEffect(() => {
    if (typeof category === 'undefined') return;

    const selectedCategory = categories.filter(
      (_category) => _category.name === category
    );

    if (selectedCategory.length !== 1) return;

    const categoryId = selectedCategory[0].id;

    setFilteredVegetables(vegetables, categoryId);
  }, [category]);

  const getVegetables = async () => {
    const vegetables = await getVegetablesService();
    setVegetables(vegetables);
    setFilteredVegetables(vegetables);
  };

  const getCategories = async () => {
    const categories = await getCategoriesService();
    setCategories(categories);
  };

  const setFilteredVegetables = (vegetables, categoryId = 0) => {
    const _filteredVegetables =
      categoryId && categoryId != 0
        ? vegetables.filter((vegetable) => {
            return vegetable.category == categoryId;
          }, [])
        : vegetables;
    _setFilteredVegetables(_filteredVegetables);
  };

  return (
    <div className="container">
      <div className="row">
        {filteredVegetables.map((vegetable) => (
          <ItemCard
            key={vegetable.id}
            {...vegetable}
          />
        ))}
      </div>
    </div>
  );
};
