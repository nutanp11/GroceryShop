// types.ts or wherever you store your types
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  ProductDetails: { data: any }; // Assuming 'data' is an object with a product's details
  // Add other screens here as needed
};

export type ExclusiveOffersNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;
