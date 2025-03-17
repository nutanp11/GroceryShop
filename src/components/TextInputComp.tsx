import { StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';

type TextInputCompProps = {
  value: string
  placeholderText: string;
  onChangeText: (text: string) => void;
  customInputStyle?: object;
  keyboardType?: TextInputProps['keyboardType'];
};

const TextInputComp = ({value, placeholderText, onChangeText, customInputStyle , keyboardType = 'default'}: TextInputCompProps) => {
  return (
    <View style={[styles.backStyle, customInputStyle]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={Colors.extrablack}
        style={styles.btnstyle}
        onChangeText={text => onChangeText(text)}
        keyboardType= {keyboardType}
        value={value}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  backStyle: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: Colors.grayBack,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  btnstyle: {
    padding: 15,
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: Colors.extrablack,
    fontWeight: '900',
  },
});
