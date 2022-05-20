import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './style';

export default function Maps({navigation}) {
    
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marker, setMarker] = useState([]);
    
    const handleNewMarker = (cordinate) => {
        setMarker([...marker, cordinate]);
    }
    console.log(marker);
    
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                setErrorMsg('Permissão ao acesso negado');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});

            setLocation(location);
        })();
    }, []); 

return (

<View style={styles.container}>
    <View style={styles.viewMaps}>
    <Text style={styles.viewText}>Trashback
     <Text style={styles.span}> Maps </Text>
     </Text>
     <Text style={styles.viewTextSlogan}>Veja o ponto de coleta mais próximo de você!</Text>
    </View>

    <MapView
    onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
    style={styles.map}
    initialRegion={{
        latitude: -3.10719,
        longitude: -60.0261,
        latitudeDelta: 0.1422,
        longitudeDelta: 0.1421
    }}
    showsUserLocation
    loadingEnabled
    mapType="standard"
    >  
     {marker.length > 0 &&
      
        marker.map((m) => {
            return <Marker 
            coordinate={m}
            key={Math.random().toString()}
            />
        })
    }
        <Marker 
        coordinate={{ 
            latitude: -3.0952765,
            longitude: -60.0262331,}}
        >
       <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>

        <Marker 
        coordinate={{ 
            latitude: -3.092286985354928,
            longitude:-60.05043368786574}}
        >
        <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>

        <Marker 
        coordinate={{ 
            latitude: -3.10719,
            longitude:-60.0261 }}
        >
        <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>

        <Marker 
        coordinate={{ 
            latitude: -3.0927666,
            longitude:-60.0404007 }}
        >
        <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>

        <Marker 
        coordinate={{ 
            latitude: -3.0794240 ,
            longitude:-60.0346189 }}
        >
        <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>

        <Marker 
        coordinate={{ 
            latitude: -3.0776883 ,
            longitude:-60.0084413 }}
        >
        <FontAwesome name="trash" size={40} color="#01543a" />
        </Marker>


        <StatusBar
        backgroundColor="#01543a"
        barStyle="content-light"
        />
        
      
    </MapView>
</View>


); 

}