import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='Home'
        component={WelcomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='ios-home' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='User'
        component={UserScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='ios-person' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='MealsCategoriesDrawer'
        component={CategoriesScreen}
        options={{
          title: 'All Meal Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='ios-restaurant' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25',
            },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={DrawerNavigator}
            options={{
              // title: 'All Meal Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={{
              title: 'Meal Detail',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
