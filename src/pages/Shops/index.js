import React from "react";
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, Image} from "react-native";
import styles from './style';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const DATA = [
    {
      id: '1',
      title: 'First Item',
      img: require('../../../assets/images/bk.png')
      
    },
    {
      id: '2',
      title: 'Second Item',
      img: require('../../../assets/images/bobs.png')
      
    },
    {
      id: '3',
      title: 'Third Item',
      img: require('../../../assets/images/gir.png')
    },
    {
      id: '4',
      title: 'Third Item',
      img: require('../../../assets/images/habibs.png')
    },
    {
      id: '5',
      title: 'Third Item',
      img: require('../../../assets/images/mc.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: require('../../../assets/images/pic.png')
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
     <View style={styles.viewRenderShop}>
         <Image source={item.img} style={{width: 80, height: 80 }} />

     </View>
      
  );

export default function Shops({navigation}) {

    return (
        <View style={styles.container}>

            <View style={styles.viewLocal}>
                <TouchableOpacity style={styles.btnLocal}
                onPress={() => navigation.navigate("Maps")}
                >
                    <Text style={styles.textLocal}>Localização atual</Text>
                    <FontAwesome
                    style={styles.iconLocal}
                    name="map-marker"
                    size= {35}
                    color= "#01543a"
                    />
                </TouchableOpacity>
            </View>

           <View style={styles.viewParceiros}>
               <TouchableOpacity style={styles.btnParceiros}
                onPress={() =>navigation.navigate("Points")}>
                   <Text style={styles.textParceiros}>Parceiros atuais</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.btnParceiros}>
                   <Text style={styles.textParceiros}>Futuros parceiros</Text>
               </TouchableOpacity>
           </View>

           <View>
             <TouchableOpacity>
                <Text></Text>
             </TouchableOpacity>
           </View>

           
            <SafeAreaView style={styles.viewShops}>
                <FlatList
                 onPress={navigation.navigate("Points")}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
          
           <View>
            <TouchableOpacity
             onPress={() => navigation.navigate("Points")}
              style={styles.btnIcon}>
                <FontAwesome
                style={styles.icon}
                name="plus"
                size= {35}
                color= "#012026"
                >

                </FontAwesome> 
            </TouchableOpacity>
           </View>
           
         



            <StatusBar 
            barStyle="light-content"
            backgroundColor="#f1f1f1"
          
            />
        </View>
       

    );
}
