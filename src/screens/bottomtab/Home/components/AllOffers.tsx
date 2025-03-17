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
import { Colors } from '../../../../constants/Colors';
import { Images } from '../../../../assets/images';
import { Fonts } from '../../../../constants/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../../../redux/CartSlice';

export const width = Dimensions.get('window').width;

// Define the type for the category item
type Category = {
  id: string;
  title: string;
  image: any;
  price: string;
};

type AllOffersProps = {
  navigation: any; // Use a more specific type based on your navigation library, e.g., StackNavigationProp
};

const AllOffers: React.FC<AllOffersProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories: Category[] = [
    { id: '1', title: 'Bell Pepper Red', image: Images.tomato, price: '$4.9' },
    { id: '2', title: 'Organic Ginger', image: Images.ginjer, price: '$5.9' },
    { id: '3', title: 'Bell Paper', image: Images.tomato, price: '$6.9' },
    { id: '4', title: 'Bell Pepper Red', image: Images.ginjer, price: '$4.9' },
  ];

  const removeItem = (index: number) => {
    dispatch(removeCartItem(index));
  };

  const renderItem = ({ item, index }: { item: Category; index: number }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails', { data: item })}
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
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.appTheme,
            padding: 10,
          }}
        >
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text
          style={{
            paddingStart: 15,
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
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AllOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  item: {
    backgroundColor: Colors.tabBackground,
    height: width / 1.6,
    width: width,
    marginEnd: 10,
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
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
