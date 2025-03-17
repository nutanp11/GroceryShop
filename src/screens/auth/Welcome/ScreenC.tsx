import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';
import HeaderText from '../../../components/HeaderText';
import {Images} from '../../../assets/images';
import {Fonts} from '../../../constants/Fonts';
import AppButton from '../../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, 'ScreenC'>

const ScreenC:React.FC = () => {
  const navigation = useNavigation<ScreenANavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <HeaderText title={'Basket'} />
        <View style={styles.basket}>
          <Image source={Images.cake} />
          <Image source={Images.cake} />
        </View>
      </View>
      <View style={styles.middleView}>
        <Image style={styles.imgstyle} source={Images.basket3} />
        <Text style={styles.headerTextStyle}>Amazing Deals & Offers</Text>
        <Text style={styles.textStyle}>
          Find deals that are cheaper than local supermarket, great discount,
          and cash backs.
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Image style={{alignSelf: 'center'}} source={Images.pager3} />
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={{alignItems: 'center', marginVertical: 20}}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  imgstyle: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  topView: {
    flex: 0.25,
  },
  bottomView: {
    flex: 0.3,
    justifyContent: 'space-around',
  },
  middleView: {
    flex: 0.45,
    alignItems: 'center',
  },
  basket: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  textStyle: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerTextStyle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    fontWeight: '900',
    lineHeight: 36,
    color: Colors.black,
  },
});
