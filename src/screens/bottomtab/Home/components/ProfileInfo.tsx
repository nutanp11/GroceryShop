import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Images} from '../../../../assets/images';
import {Fonts} from '../../../../constants/Fonts';
import {Colors} from '../../../../constants/Colors';
import { WELCOME_TEXT } from '../../../../constants/Strings';

const ProfileInfo: React.FC = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <Text style={styles.textStyle}>{WELCOME_TEXT}</Text>
        <Text style={styles.largeText}>Johnson </Text>
      </View>
      <View style={styles.roundborderview}>
        <View style={styles.imgView}>
          <Image source={Images.profile} />
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  firstView: {
    width: '70%',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textGray,
  },
  largeText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  roundborderview: {
    width: '30%',
    alignSelf: 'center',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    alignSelf: 'center',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
  },
});
