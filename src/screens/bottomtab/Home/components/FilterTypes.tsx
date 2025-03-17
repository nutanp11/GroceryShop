import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../constants/Colors';

const HorizontalFlatList = () => {
  const categories = [
    { id: '1', title: 'Popular' },
    { id: '2', title: 'Fruits' },
    { id: '3', title: 'Veggie' },
    {id: '4', title: 'Spicies'},
  ];

  const renderItem: React.FC = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  item: {
    backgroundColor: Colors.tabBackground,
    marginRight: 15,
    padding:10,
    alignSelf:'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalFlatList;
