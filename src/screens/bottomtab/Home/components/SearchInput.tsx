import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/Colors';
import {Fonts} from '../../../../constants/Fonts';
import Icon from 'react-native-vector-icons/AntDesign';
import {Images} from '../../../../assets/images';

type TextInputCompProps = {
  value: string;
  onChangeText:(text:string) => void;
}


const SearchInput = ({value, onChangeText}: TextInputCompProps) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <Icon name={'search1'} size={30} />
      </View>

      <View style={styles.imgView}>
        <TextInput
          value={value}
          placeholder="What do you looking for?"
          style={styles.inputStyle}
          placeholderTextColor={Colors.textGray}
          onChangeText={onChangeText}
        />
        <Image style={styles.imgStyle} source={Images.filter} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    width: '100%',
  },

  firstView: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    padding: 10,
  },
  imgView: {
    flexDirection: 'row',
    width: '85%',
    marginStart: 10,
    justifyContent: 'space-between',
    // backgroundColor:'red',
    borderBottomWidth: 1,
  },
  imgStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
