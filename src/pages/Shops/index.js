import React from "react";
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, Image} from "react-native";
import styles from './style';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

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

 
  
  const Item = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>

  );
  

export default function Shops() {

  const navigation = useNavigation();
  
  const renderItem = ({ item }) => {
    return (
      <View style={styles.viewRenderShop}>
     <TouchableOpacity
      onPress={() => navigation.navigate("Points")}
      >
       <Image source={item.img} style={styles.img} />

     </TouchableOpacity>

   </View>
    );
  }
   

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
              <Text style={styles.textTop}>Lojas onde seu descarte irá valer trashcoins!</Text>
           </View>

           
            <SafeAreaView style={styles.viewShops}>
                <FlatList
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.viewShops}>
                <FlatList
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
            style="light"
            backgroundColor="#012026"
          
            />
        </View>
       

    );
}
