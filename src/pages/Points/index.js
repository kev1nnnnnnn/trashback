import React from "react";
import styles from "./style";
import { View, Text, Image, TouchableOpacity, ScrollView , FlatList, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";


export default function Points({navigation}) {

    const DATA = [
        {
          id: '1',
          title: 'copo plástico',
          points: 20,
          img: require('../../../assets/images/copobobs.jpg')
        },
        {
          id: '2',
          title: 'canudo plástico',
          points: 40,
          img: require('../../../assets/images/copobobs.jpg')
        },
        {
          id: '3',
          title: 'sacola plástica',
          points: 60,
          img: require('../../../assets/images/copobobs.jpg')
        },
        {
          id: '4',
          title: 'papel ',
          points: 60,
          img: require('../../../assets/images/copobobs.jpg')
        },
        {
          id: '5',
          title: 'sacola plástica',
          points: 60,
          img: require('../../../assets/images/copobobs.jpg')
        },
        {
          id: '6',
          title: 'sacola plástica',
          points: 60,
          img: require('../../../assets/images/copobobs.jpg')
        },
      ];

      const Item = ({ title, img }) => (
        <View>   
        <Text style={styles.title}>{title}</Text>
            
        </View>
      );
      
      const renderItem = ({ item}) => (
        <View style={styles.viewProductsPoints}>
            <Image style={styles.imgRender} source={item.img}/>
            <Item title={item.title} />
            <Item title={item.points} />
            <Icon style={styles.iconPlus}  name="add-circle-outline" ></Icon>
            
        </View>
        
      );

    return (
        <View style={styles.container}>
       
            <View style={styles.viewTop}>
                <Image
                    style={styles.imgShop}
                    source={require('../../../assets/images/bk.png')}
                />
                <TouchableOpacity>
                    <Icon style={styles.iconAlert}  name="cart" ></Icon>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
           
      <StatusBar 
            barStyle="light-content"
            backgroundColor="#ffff"
          
            />
     
        </View>
    );
}

