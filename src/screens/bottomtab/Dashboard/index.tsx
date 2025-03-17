/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Cart from '../Cart';
import Icon from 'react-native-vector-icons/AntDesign';
import Notification from '../Notification';
import Search from '../Search';

const Dashboard = () => {
  const Tab = createBottomTabNavigator();

  // TabIcon Component
  const TabIcon1 = ({focused}) => (
    <View style={styles.iconView}>
      {focused ?
      <View style={styles.viewStyle}>
        <Icon name="search1" size={25} color={focused ? '#ffffff' : '#ffff'} />
      </View>
      :
      <Icon name="search1" size={25} color={focused ? '#ffffff' : '#ffff'} />
  }
    </View>
  );

  const TabIcon2 = ({focused}) => (
    <View style={styles.iconView}>
      {focused ?
      <View style={styles.viewStyle}>
        <Icon name="bells" size={25} color={focused ? '#ffffff' : '#ffff'} />
      </View>
      :
      <Icon name="bells" size={25} color={focused ? '#ffffff' : '#ffff'} />
  }
    </View>
  );

  const TabIcon3 = ({focused}) => (
    <View style={styles.iconView}>
       {focused ?
      <View style={styles.viewStyle}>
      <Icon name="creditcard" size={30} color={focused ? '#ffffff' : '#fff'} />
      </View>
    :
    <Icon name="creditcard" size={25} color={focused ? '#ffffff' : '#ffff'} />}
    </View>
  );

  const TabIcon4 = ({focused}) => (
    <View style={styles.iconView}>
     {focused ?
      <View style={styles.viewStyle}>
        <Icon name="home" size={25} color={focused ? '#ffffff' : '#ffff'} />
      </View>
      :
      <Icon name="home" size={25} color={focused ? '#ffffff' : '#ffff'} />
  }
    </View>
  );

  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 2,
          left: 25,
          right: 25,
          elevation: 5,
          backgroundColor: '#2F2E41',
          borderRadius: 10,
          margin: 10,
          height: 65,
        },
        tabBarShowLabel: false,
        headerShown: false,

      })}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => <TabIcon1 focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => <TabIcon2 focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => <TabIcon3 focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <TabIcon4 focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#100F18',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  iconView:{top: Platform.OS === 'ios' ? 10 : 0}
});
