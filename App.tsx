import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from './src/constants/Colors';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
    <MainNavigator/>
    </SafeAreaView>
    </View>
     </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:Colors.appBackground,
  },
});