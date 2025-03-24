import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import { Images } from '../../../assets/images';
import { Fonts } from '../../../constants/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../../redux/CartSlice';
import { useNavigation } from '@react-navigation/native';

// Define the types for your product/item
interface CartItem {
  id: string;
  title: string;
  image: any;
}

interface RootState {
  cart: CartItem[];
}

export const width = Dimensions.get('window').width;

const ExclusiveOffers: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // Use useSelector with RootState to infer the correct type
  const addedItems = useSelector((state: RootState) => state.cart);

  const removeItem = (index: number): void => {
    dispatch(removeCartItem(index));
  };

  // Define renderItem with type parameters to make sure each item is typed correctly
  const renderItem = ({ item, index }: { item: CartItem; index: number }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails',{data: item})}
    >
      <TouchableOpacity
        onPress={() => removeItem(index)}
        style={{
          backgroundColor: Colors.appTheme,
          margin: 5,
          alignItems: 'center',
          padding: 15,
          borderRadius: 10,
          alignSelf: 'flex-end',
          alignContent: 'center',
        }}
      >
        <Image source={Images.minus} />
      </TouchableOpacity>
      <Image style={{ alignSelf: 'center' }} source={item?.image} />
      <Text style={styles.itemText}>{item.title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            backgroundColor: Colors.appTheme,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: Colors.white }}>1Lb, Priceg</Text>
        </View>
        <Text>$4.99</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            fontWeight: '900',
            color: Colors.appTheme,
          }}
        >
          Exclusive Offer
        </Text>
      </View>
      <FlatList
        data={addedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExclusiveOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.tabBackground,
    height: width / 1.6,
    width: width - 20,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imgStyle: {
    height: 148,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 354,
  },
});
