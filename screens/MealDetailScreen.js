import { Image, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealDetail from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';

//Context
// import { FavoritesContext } from '../store/context/favorites-context';

//Redux Actions
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const dispatch = useDispatch();

  const mealID = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const mealIsFavorite = favoriteMealIds.includes(mealID);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsContext.removeFavorite(mealID);
      dispatch(removeFavorite(mealID));
      Alert.alert(
        'Favorite',
        'This meal has been removed from your favorites',
        [{ text: 'OK' }]
      );
    } else {
      // favoriteMealsContext.addFavorite(mealID);
      dispatch(addFavorite(mealID));
      Alert.alert('Favorite', 'This meal has been added to your favorites', [
        { text: 'OK' },
      ]);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'ios-star' : 'ios-star-outline'}
          color={'white'}
          onPress={changeFavoritesStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.screen}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

        <Text style={styles.title}>{selectedMeal.title}</Text>

        <View>
          <MealDetail
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
            textStyle={styles.detialText}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredient</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detialText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
    width: 300,
  },
});
