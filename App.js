import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './components/CartContext.js'; 
import HomeScreen from './screens/HomeScreen.js';
import ProductDetail from './screens/ProductDetail.js';
import Blogposts from './screens/Blogposts.js';
import BlogDetail from './screens/BlogDetail.js';
import AboutUs from './screens/AboutUs.js';
import Nav from './components/Nav.js';
import Cart from './screens/Cart.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={ProductDetail} />
          <Stack.Screen name="Blogposts" component={Blogposts} />
          <Stack.Screen name="BlogDetail" component={BlogDetail} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={Cart} />

        </Stack.Navigator>
      </NavigationContainer> 
    </CartProvider>
  );
}

