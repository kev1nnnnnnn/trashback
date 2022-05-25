import * as React from 'react';
// Stack, Drawer, Tab
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//Realiza a importação dos arquivos (paginas) que serão chamadas

import  Shops from './src/pages/Shops';
import  Points from './src/pages/Points';
import  Information from './src/pages/Information/'; 
import Maps from './src/pages/Maps/';
import Qrscan from './src/pages/qrscan/';

import  Login from './src/pages/Login/';
import  CreateUser from './src/pages/CreateUser/';

import  Profile  from './src/pages/Profile';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


export default function Navigation() { 
  return (
  <Stack.Navigator 
    initialRouteName='Shops'
    screenOptions={{headerShown:false}}>  
      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
      /> 

    <Stack.Screen
        name="Shops"
        component={MyTabs}
      />
    <Stack.Screen
    name="Information"
    component={Information}
    />  
    

    </Stack.Navigator>
  )
}

/*
ESTA FUNÇÃO APRESENTA TODA A NAVEGAÇÃO APARTIR DO LOGIN
ESTÁ SENDO CHAMADA NA FUNÇÃO MyTabs ATRAVÉS DO component={Mystack1}
*/
function MyStack1(){
  return(
    <Stack.Navigator
    screenOptions={{headerShown:false}}>
        
    <Stack.Screen
    name="Shops"
    component={Shops}
    />

    <Stack.Screen
    name="Information"
    component={Information}
    />

    <Stack.Screen
    name="Maps"
    component={Maps}
    />
    <Stack.Screen
    name="Qrscan"
    component={Qrscan}
    />
     <Stack.Screen
    name="Points"
    component={Points}
    />
  
  </Stack.Navigator>
    )
  }

  function MyStack2() { 
    return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}>  
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTintColor: "##012026",
            headerLeft: null
          }}
        />
  
      </Stack.Navigator>
    )
  }
  

function MyTabs() {
  return (
    <NavigationContainer independent={true}>

      <Tab.Navigator 
      screenOptions={{ 
        tabBarLabelStyle: { fontSize: 11 },
        headerShown:false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
        tabBarStyle: { display: 'none' },
        paddingVertical: 5,
        backgroundColor:'#012026',
        borderTopColor: '#00f777',
      },
        
      }}
      >
      <Tab.Screen
      /*
      AQUI O  name="Products" ESTÁ SENDO PEGADO DO component={MyStack1}, O QUE JÁ TORNA DISPONÍVEL PARA 
      NAVEGAÇÃO TODAS AS DEMAIS TELAS DA FUNÇÃO MyStack1
      */
      name="Lojas" 
      component={MyStack1}
      options={{
        unmountOnBlur: true,
        
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color='#00f777' size={22}/>
        ),
      }} />
    
    <Tab.Screen
      name="Perfil" 
      component={MyStack2}
      options={{
        unmountOnBlur: true,
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color='#00f777' size={22}/>
        ),
      }} 
      />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

