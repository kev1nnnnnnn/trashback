import React, { useState, useEffect } from 'react';
import {View,
        TextInput,
        Text,
       TouchableOpacity,
       Image,
       KeyboardAvoidingView,
       Vibration
    } from 'react-native';
  
// Import do banco de dados
import firebase from "../../config/firebaseconfig.js";
import styles from './style';
import { StatusBar } from 'expo-status-bar'
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
 require('firebase/auth');

/* Função para realizar o login, passando {navigation} como parametro
** para redirecionar para outras as paginas
*/
export default function Login({ navigation }) {

    /* Declara as consts de acordo com os campos do form. 
    ** const email, passa como -value-
    ** const setEmail é chamada no -onChange-
    */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    /* As etapas para um usuário fazer login com uma senha são semelhantes às de criação de uma nova conta.
    ** Quando um usuário fizer login no app, transmita o endereço de e-mail e a senha dele para 
    ** signInWithEmailAndPassword:
    */
    const loginFirebase = () => {

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        
            let user = userCredential.user;
            navigation.navigate('Shops',{idUser: user.uid})
        })
        .catch((error) => {
            setErrorLogin(true);
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }
    function verificaLogin() {

        if (email == null && password == null) {
            Vibration.vibrate() //vibrar a tela 
            setErrorMsg("Campo obrigatório*") 
        }
    }

    useEffect(() => {
        console.log('hello');
    }, []);


    return(
        
        /* O componente -KeyboardAvoidingView- ajustar automaticamente sua altura, 
        posição ou preenchimento inferior com base na altura do teclado. */
    <KeyboardAvoidingView
    //Especifique como reagir à presença do teclado.
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
    >
        
    <Image style={styles.imgLogo}
        source={require('../../../assets/images/logo.png')}>
    </Image>
    
    <TouchableOpacity
        style={styles.button}
        >
        <Text style={styles.buttonText}>entrar com o facebook</Text>      
    </TouchableOpacity>

    {/* Entrada: Email */}
    <TextInput
    style={styles.input}
    placeholder="Digite seu email"
    onChangeText={setEmail}
    value={email}
  
    />
    {/* Entrada: Password */}
    <TextInput
    style={styles.input}
    secureTextEntry={true}
    placeholder="Digite sua senha"
    onChangeText={setPassword}
    value={password}
   
    />


    {/* Validação de erro */}
    {errorLogin === true
     
    ?   
    
        <View style={styles.contentAlert}>
            
            <Icon style={styles.iconAlert} name="alert-circle-outline" ></Icon>
            <Text style={styles.warningAlert}>Email ou senha inválida! </Text>
        </View>
    :
        <View/>
    }
    {/* Faz a verificação dos campos, se for vazio, 
    o botão ficará desabilitado através da propriedade disabled={true}  */}
    { email === "" || password === "" 
    ?
    <TouchableOpacity
    onPress={() => {
        Vibration.vibrate()
    }}

    style={styles.buttonLogin}
    
    >
    <Text style={styles.textButtonLogin}>Sign up</Text>
    </TouchableOpacity>
    :
     /* Faz a verificação se os campos foram preenchidos corretamente
    ** registrará o usuario através do onPress={register}
    ** passando a funcao register no parametro
    */
   
    <TouchableOpacity
    style={styles.buttonLogin}
    onPress={loginFirebase}
    >
    <Text style={styles.textButtonLogin}>Sign up</Text>
    </TouchableOpacity>

    }

    <Text style={styles.registration}>
       Não é registrado?
        <Text
            style={styles.linkSubscribe}
            onPress={() => navigation.navigate("CreateUser")}
        >
        Inscreva-se agora!
        </Text>
    </Text>
    


    <View style={{height: 100}} />

    <StatusBar
    backgroundColor="#00e1a7"
    barStyle="content-light"
    />
    
    </KeyboardAvoidingView>
        

    );
}