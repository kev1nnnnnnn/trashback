import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import firebase from '../../config/firebaseconfig';

export default function Profile({ navigation }) {

  const [errorLogin, setErrorLogin] = useState(false);

  const logout = () => {

    firebase.auth().signOut().then(() => {
        navigation.navigate('Login')
      }).catch((error) => {
        setErrorLogin(true);
      });
    
    
    }
  return (
    <View style={styles.container}>
       
      <LinearGradient colors={['#012026', '#012026']} style={styles.linearGradientTasks}>
        <FontAwesome
        style={styles.icon}
          name="user"
          size= {35}
          color= "#00f777"
        >
            
        </FontAwesome> 
        </LinearGradient>
      
      <View>
        <Text style={styles.title}>John Kevin</Text>
        <Text style={styles.title2}>Kevinnfv@gmail.com</Text>
      </View>
        

      <View style={styles.viewProfile}>
        <TouchableOpacity style={styles.btnProfile}>
          <FontAwesome
          style={styles.iconProfile}
            name="home"
            size= {25}
            color= "#00f777"
          >  
          </FontAwesome> 
          <Text style={styles.textProfile}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnProfile}>
          <FontAwesome
          style={styles.iconProfile}
            name="user"
            size= {25}
            color= "#00f777"
          ></FontAwesome>
          <Text style={styles.textProfile}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnProfile}>
          <FontAwesome
          style={styles.iconProfile}
            name="bell"
            size= {25}
            color= "#00f777"
          ></FontAwesome>
          <Text style={styles.textProfile}>Notificação</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.btnProfile}
        onPress={(text) => logout(text)}
        >
          <FontAwesome
          style={styles.iconProfile}
            name="sign-out"
            size= {25}
            color= "#00f777"
          ></FontAwesome>
          <Text style={styles.textProfile}>Sair</Text>
        </TouchableOpacity>
       

      </View>




        <StatusBar style="light" backgroundColor="#012026"/>
    </View>
  );
}
