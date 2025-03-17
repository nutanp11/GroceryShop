/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/Colors';
import {Images} from '../../../../assets/images';
import {width} from '../components/FeaturedListComp';
import {Fonts} from '../../../../constants/Fonts';
import Icon from 'react-native-vector-icons/AntDesign';

type ProductDetailsProps = {
  navigation: any;
  route: {
    params: {
      data: {
        id: string;
        title: string;
        image: any;
        price: string;
      };
    };
  };
};

const ProductDetails = ({navigation, route}: ProductDetailsProps) => {
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.goBackButton}>
            <Image source={Images.back} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.quantityButton}>
            <Image source={Images.minus} />
            <Text style={styles.quantityText}>5 LB</Text>
            <Image source={Images.plus} />
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="contain"
          style={styles.productImage}
          source={data.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.productHeader}>
          <Text style={styles.productTitle}>{data.title}</Text>
          <Text style={styles.productPrice}>{data.price}</Text>
        </View>
        <View style={styles.productInfoContainer}>
          <View style={styles.productInfo}>
            <Image source={Images.calories} />
            <Text style={styles.textStyle}>100 Calories</Text>
          </View>
          <View style={styles.productInfo}>
            <Image source={Images.star} />
            <Text style={styles.textStyle}>4.8</Text>
          </View>
          <View style={styles.productInfo}>
            <Image source={Images.chat} />
            <Text style={styles.textStyle}>203 Reviews</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Description</Text>
        <Text style={styles.subText}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts
        </Text>
        <TouchableOpacity style={styles.addToCartContainer}>
          <Text style={styles.addToCartPrice}>$25.66</Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Icon name="creditcard" size={25} color={'#ffffff'} />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.6,
    marginHorizontal: 10,
  },
  addToCartPrice: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  addToCartButton:{
backgroundColor: Colors.black,
flexDirection:'row',
alignItems:"center",
justifyContent:"space-between",
padding:10,
borderRadius:10
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Fonts.semibold,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.regular,
  },
  addToCartContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.appTheme,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    width: '33%',
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.NunitoMedium,
    fontSize: 14,
  },
  addToCartText:{
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 14,
    paddingStart:10
  },
  productTitle: {
    fontSize: 24,
    fontFamily: Fonts.NunitoExtraBold,
  },
  productPrice: {
    fontSize: 20,
    fontFamily: Fonts.NunitoExtraBold,
  },
  detailsContainer: {
    flex: 0.4,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productInfoContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.fadedGrey,
    margin: 12,
  },
  quantityButton: {
    backgroundColor: Colors.appTheme,
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  quantityText: {
    color: Colors.white,
    fontFamily: Fonts.NunitoMedium,
    fontSize: 20,
  },
  goBackButton: {
    backgroundColor: Colors.appTheme,
    padding: 10,
    borderRadius: 10,
    alignItems:"center",
    justifyContent:'center'
  },
  productImage: {
    width: width / 1.2,
    height: width / 1.2,
    alignSelf: 'center',
  },
});
