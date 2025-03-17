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
type ScreenANavigationProp = StackNavigationProp<RootStackParamList, 'ScreenB'>;

const ScreenB:React.FC = () => {
  const navigation = useNavigation<ScreenANavigationProp>();

  return (
    <View style={styles.container}>
      <View style={{flex: 0.25}}>
        <HeaderText title={'Basket'}></HeaderText>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Image source={Images.cake}></Image>
          <Image source={Images.cake}></Image>
        </View>
      </View>
      <View style={{flex: 0.45, alignItems: 'center'}}>
        <Image style={styles.imgstyle} source={Images.basket2}></Image>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.bold,
            fontWeight: '900',
            lineHeight: 36,
            color: Colors.black,
          }}>
          Amazing Deals & Offers
        </Text>
        <Text
          style={{
            width: '70%',
            fontSize: 18,
            fontFamily: Fonts.regular,
            fontWeight: '400',
            textAlign: 'center',
            color: Colors.textGray,
            marginVertical: 10,
          }}>
          Find deals that are cheaper than local supermarket, great discount,
          and cash backs.
        </Text>
      </View>
      <View style={{flex: 0.3, justifyContent: 'space-around'}}>
        <Image style={{alignSelf: 'center'}} source={Images.pager2} />
        <AppButton
          title={'Next'}
          onPress={() => navigation.navigate('ScreenC')}
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

export default ScreenB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  imgstyle: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});
