import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealsList/MealList';
import { MEALS } from '../data/dummy-data';

//Context
// import { useContext } from 'react';
// import { FavoritesContext } from '../store/context/favorites-context';

//Redux
import { useSelector } from 'react-redux';

function UserScreen() {
  // const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return (
    (favoritesMeals.length > 0 && <MealList items={favoritesMeals} />) || (
      <View style={styles.rootContainer}>
        <Text style={{ color: 'white' }}>
          No favorite <Text style={styles.highlight}>meals</Text> found. Start
          adding some!
        </Text>
      </View>
    )
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
