import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextStyle,
  ViewStyle,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import AppButton from '../../components/AppButton';
import TextInputComp from '../../components/TextInputComp';
import HeaderText from '../../components/HeaderText';
import CheckBox from '@react-native-community/checkbox';
import PhoneInput from 'react-native-phone-input';
import { ALREADY_ACCOUNT } from '../../constants/Strings';

type SignUpNavigationProp = {
  navigate: (screen: string) => void;
};

type SignUpProps = {
  navigation: SignUpNavigationProp;
};

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone_number, setPhoneNumber] = useState<string>('');
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  const validateForm = (): boolean => {
    if (!name.trim()) {
      Alert.alert('Validation Failed', 'Please enter your full name.');
      return false;
    }
    if (!email.trim()) {
      Alert.alert('Validation Failed', 'Please enter your email address.');
      return false;
    }
    // Simple email regex validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Failed', 'Please enter a valid email address.');
      return false;
    }
    if (!password.trim()) {
      Alert.alert('Validation Failed', 'Please enter your password.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Validation Failed', 'Password should be at least 6 characters.');
      return false;
    }
    if (!phone_number.trim()) {
      Alert.alert('Validation Failed', 'Please enter your phone number.');
      return false;
    }
    if (!toggleCheckBox) {
      Alert.alert('Validation Failed', 'You must agree to the terms and conditions.');
      return false;
    }
    return true;
  };

  const onPressCreateAccount = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Your account has been created.');
      navigation.navigate('SignIn');
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.topview}>
          <HeaderText title={'Basket'} />
          <Text style={styles.loginText}>Create an Account</Text>
          <Text style={styles.subtext}>Please type your information</Text>

          <TextInputComp
            value={name}
            placeholderText={'Full name'}
            onChangeText={(text: string) => setName(text)}
          />
          <TextInputComp
            value={email}
            placeholderText={'Email address'}
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextInputComp
            value={password}
            placeholderText={'Password'}
            onChangeText={(text: string) => setPassword(text)}
          />

          <View style={styles.phoneContainer}>
            <View style={styles.phoneInputWrapper}>
              <PhoneInput
                initialCountry={'us'}
                initialValue="13178675309"
                textProps={{
                  placeholder: 'Enter a phone number...',
                }}
              />
            </View>

            <TextInputComp
              value={phone_number}
              placeholderText={'000-00-0000'}
              onChangeText={(text: string) => setPhoneNumber(text)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.checkBoxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue: boolean) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.agreementText}>
              By joining, I agree to receive emails from Geeta.
            </Text>
          </View>
          <AppButton title={'Create Account'} onPress={onPressCreateAccount} />
        </View>

        <View style={styles.bottomview}>
          <View style={styles.signiInview}>
            <Text style={styles.graytext}>{ALREADY_ACCOUNT} </Text>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={styles.blacktext}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  } as ViewStyle,
  topview: {
    flex: 0.8,
    padding: 10,
  } as ViewStyle,
  signiInview: {
    flexDirection: 'row',
    alignSelf: 'center',
  } as ViewStyle,
  bottomview: {
    flex: 0.2,
    justifyContent: 'space-between',
  } as ViewStyle,
  loginText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: '900',
    fontFamily: Fonts.bold,
    alignSelf: 'center',
  } as TextStyle,
  subtext: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 35,
    color: Colors.textGray,
    fontFamily: Fonts.regular,
    alignSelf: 'center',
  } as TextStyle,
  phoneContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  } as ViewStyle,
  phoneInputWrapper: {
    backgroundColor: Colors.grayBack,
    alignSelf: 'center',
    padding: 20,
  } as ViewStyle,
  checkBoxContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  } as ViewStyle,
  agreementText: {
    fontFamily: Fonts.regular,
    alignSelf: 'center',
    color: Colors.textGray,
  } as TextStyle,
  graytext: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textGray,
    fontFamily: Fonts.regular,
    alignSelf: 'center',
  } as TextStyle,
  blacktext: {
    fontSize: 14,
    fontFamily: Fonts.semibold,
  } as TextStyle,
  inpuStyle: { width: '75%' } as TextStyle,
});
