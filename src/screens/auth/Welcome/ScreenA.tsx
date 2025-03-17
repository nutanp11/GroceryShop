import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import HeaderText from '../../../components/HeaderText';
import { Images } from '../../../assets/images';
import { Fonts } from '../../../constants/Fonts';
import AppButton from '../../../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // Import the types

// Type for the navigation prop
type ScreenANavigationProp = StackNavigationProp<RootStackParamList, 'ScreenA'>;

const ScreenA: React.FC = () => {
  const navigation = useNavigation<ScreenANavigationProp>(); // Type the navigation hook

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderText title="Basket" />
        <View style={styles.imageRow}>
          <Image source={Images.cake} />
          <Image source={Images.cake} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Image style={styles.imgstyle} source={Images.basket1} />
        <Text style={styles.mainText}>
          Amazing Deals & Offers
        </Text>
        <Text style={styles.subText}>
          Find deals that are cheaper than local supermarkets, great discounts,
          and cashbacks.
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <Image style={styles.footerImage} source={Images.pager1} />
        <AppButton
          title="Next"
          onPress={() => navigation.navigate('ScreenB')} // This is now properly typed
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.skipButton}
        >
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  headerContainer: {
    flex: 0.25,
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  contentContainer: {
    flex: 0.45,
    alignItems: 'center',
  },
  imgstyle: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  mainText: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    fontWeight: '900',
    lineHeight: 36,
    color: Colors.black,
  },
  subText: {
    width: '70%',
    fontSize: 18,
    fontFamily: Fonts.regular,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.textGray,
    marginVertical: 10,
  },
  footerContainer: {
    flex: 0.3,
    justifyContent: 'space-around',
  },
  footerImage: {
    alignSelf: 'center',
  },
  skipButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
