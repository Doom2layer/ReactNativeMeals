import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealsList/MealList';

function MealsOverviewScreen({ navigation, route }) {
  const CategoryID = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(CategoryID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === CategoryID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [CategoryID, navigation]);

  return <MealList items={displayedMeals} />;
}
export default MealsOverviewScreen;
