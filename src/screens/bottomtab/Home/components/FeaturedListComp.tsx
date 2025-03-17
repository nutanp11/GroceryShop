import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../constants/Colors';
import {Images} from '../../../../assets/images';
import { Fonts } from '../../../../constants/Fonts';

export const width = Dimensions.get('window').width;
const FeaturedListComp: React.FC = () => {
  const categories = [
    {id: '1', title: 'Popular'},
    {id: '2', title: 'Fruits'},
    {id: '3', title: 'Veggie'},
    {id: '4', title: 'Spicies'},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <ImageBackground
        resizeMode={'contain'}
        style={styles.imgStyle}
        source={Images.banner}>
        <View>
        <Image style={{alignSelf:'center'}} source={Images.deals} />

          <Image style={{alignSelf:'center', marginVertical:5}} source={Images.offer} />

          <TouchableOpacity style={{backgroundColor:Colors.appTheme, alignSelf:'center', padding:10, margin:15}}>
            <Text style={{color:Colors.white, fontSize:14, fontFamily: Fonts.bold}}>Shop Now </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* <Text style={styles.itemText}>{item.title}</Text> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FeaturedListComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor:'red'
  },
  item: {
    backgroundColor: Colors.tabBackground,
    alignSelf: 'center',
    // alignItems: 'center',
    justifyContent:'center',
    marginEnd: 10,
    height: 148,
    width: 354,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imgStyle: {
    height: 148,
    alignItems: 'flex-end',
    justifyContent:'center',
    width: 354,
  },
});
