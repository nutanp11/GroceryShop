/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';
import {Fonts} from '../../../constants/Fonts';
import {Images} from '../../../assets/images';
import ProfileInfo from './components/ProfileInfo';
import SearchInput from './components/SearchInput';
import FilterTypes from './components/FilterTypes';
import FeaturedListComp from './components/FeaturedListComp';
import ExclusiveOffers from './components/Offers';

import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.25}}>
        <ProfileInfo />
        <SearchInput value={''} onChangeText={()=>{}} />
        <FilterTypes />
      </View>

      <View style={{flex: 0.22}}>
        <FeaturedListComp />
      </View>

      <View style={{flex: 0.45}}>
        <ExclusiveOffers />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
