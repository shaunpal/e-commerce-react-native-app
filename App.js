import React from 'react';
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import UserProfile from './components/Profile';
import Categories from './components/Categories';
import CategoryItem from './components/CategoryItem';
import { ItemProvider } from './contexts/ItemContext';
import Cart from './components/ShoppingCart';


const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <ItemProvider>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
              options={{headerShown: false}}
              name="Shop"
              component={Home}
              />
              <Stack.Screen
              name="Profile"
              component={UserProfile}
              />
              <Stack.Screen
              name="Categories"
              component={Categories}
              />
              <Stack.Screen
              options={{headerShown: false}}
              name="Books"
              component={CategoryItem}
              />
              <Stack.Screen
              options={{headerShown: false}}
              name="Electronics"
              component={CategoryItem}
              />
              <Stack.Screen
              options={{headerShown: false}}
              name="Shoes"
              component={CategoryItem}
              />
              <Stack.Screen
              options={{headerShown: false}}
              name="Clothing"
              component={CategoryItem}
              />
              <Stack.Screen
              name="Cart"
              component={Cart}
              />

          </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}