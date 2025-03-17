import { StyleSheet, Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

// Define the type for props, including title and onPress
type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void; // Specify the type for onPress (it accepts a gesture event)
};

const AppButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <Text style={styles.btntextstyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.appTheme,
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 10,
  },
  btntextstyle: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.white,
    fontFamily: Fonts.bold,
    alignSelf: 'center',
    lineHeight: 45,
  },
});
