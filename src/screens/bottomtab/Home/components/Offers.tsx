/* eslint-disable react-native/no-inline-styles */
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
import {Colors} from '../../../../constants/Colors';
import {Images} from '../../../../assets/images';
import {Fonts} from '../../../../constants/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../../../redux/CartSlice';
import { useNavigation } from '@react-navigation/native';
export const width = Dimensions.get('window').width;

const ExclusiveOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const categories = [
    {id: '1', title: 'Bell Pepper Red', image: Images.tomato, price:'$4.9'},
    {id: '2', title: 'Organic Ginger', image: Images.ginjer, price:'$5.9'},
    {id: '3', title: 'Organic Ginger', image: Images.ginjer, price:'$6.9'},
    {id: '4', title: 'Bell Pepper Red', image: Images.ginjer, price:'$4.9'},
  ];

const addItem = (item)=>{
  dispatch(addCartItem(item));
};

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} 
    onPress={()=> navigation.navigate('ProductDetails',{data: item})}>
      <TouchableOpacity
      onPress={()=> addItem(item)}
        style={styles.blackViewStyle}>
        <Image source={Images.plus} />
      </TouchableOpacity>
      <Image style={{alignSelf: 'center'}} source={item?.image} />

      <Text style={styles.itemText}>{item.title}</Text>
      <View style={{flexDirection:'row',alignItems:'center',
            justifyContent:'space-between',}}>
        <View style={{backgroundColor: Colors.appTheme, paddingHorizontal:10,paddingVertical:5, borderRadius:15}}>
            <Text style={{color: Colors.white}}>1Lb, Priceg</Text>
        </View>
        <Text>$4.99</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
        //   backgroundColor: 'pink',
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            fontWeight: '900',
            color: Colors.appTheme,
          }}>
          Exclusive Offer
        </Text>
        <TouchableOpacity
        onPress={()=> navigation.navigate('AllOffers')}
        >
        <Text
          style={{
            fontFamily: Fonts.regular,
            fontSize: 16,
            fontWeight: '700',
            color: Colors.appTheme,
          }}>
          See all
        </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExclusiveOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //  backgroundColor:'red'
  },
  item: {
    backgroundColor: Colors.tabBackground,
    height: width / 1.6,
    width: width / 2.3,
    marginEnd: 12,
    borderRadius: 20,
    padding:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  blackViewStyle:{
    backgroundColor: Colors.appTheme,
    margin: 5,
  alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'flex-end',
    alignContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginVertical: 10,
  },
  imgStyle: {
    height: 148,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 354,
  },
});
