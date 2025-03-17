import React from 'react';
import ScreenA from '../screens/auth/Welcome/ScreenA';
import ScreenC from '../screens/auth/Welcome/ScreenC';
import ScreenB from '../screens/auth/Welcome/ScreenB';
import Home from '../screens/bottomtab/Home';
import Dashboard from '../screens/bottomtab/Dashboard';
import ProductDetails from '../screens/bottomtab/Home/Details/ProductDetails';
import AllOffers from '../screens/bottomtab/Home/components/AllOffers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
  ScreenC: undefined;
  Dashboard: undefined;
  Home: undefined;
  ProductDetails: undefined;
  AllOffers: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="ScreenA"
      component={ScreenB}
      options={{headerShown: false}}/>
        <Stack.Screen
      name="ScreenB"
      component={ScreenA}
      options={{headerShown: false}}/>
        <Stack.Screen
      name="ScreenC"
      component={ScreenC}
      options={{headerShown: false}}/>
        <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{headerShown: false}}/>
      <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
