//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Katalog from './components/Katalog';
// or any pure javascript modules available in npm


import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{    fontSize: 20,}}>Informasi Toko sepatu djengsri</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
    <Katalog/>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1,  backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Untuk Info Pemesanan</Text>
    <Text>Alamat : Jalan raya selomerto wonosobo</Text>
        <Text>Watssapp : 085865022003 </Text>
          <Text>atau</Text>
          <Text>FB : SRI HANDAYANI </Text>
    
        
    
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Katalog: {
    screen: ProfileScreen,
  },
    Profile: {
    screen: AboutScreen,
  },
});
export default RootTabs;