import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
    } from "react-native";

    import styles from './style';
    import Icon from "react-native-vector-icons/Ionicons";
    import firebase from "../../config/firebaseconfig.js/";


/* Criação da função para cadastrar usuários no sistema.
** Passando {navigation} como parâmetro para funcionar a navegação. 
*/
export default function CreateUser({ navigation }) {

    /* Declara as consts de acordo com os campos do form. 
    ** const email, passa como -value-
    ** const setEmail é chamada no -onChange-
    */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");
    
    // Criada uma const que recebe uma função no qual fará o registro dos usuários.
    const register = () => {

        /*Quando um novo usuário se inscrever usando o formulário,  irá verificar se a senha da nova conta foi digitada corretamente e atende aos requisitos de complexidade.
        */
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                
            var user = userCredential.user;
            navigation.navigate("Products", { idUser: user.uid });
            
            })
            .catch((error) => {
                setErrorRegister(true);
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }   
    return (

        /* O componente -KeyboardAvoidingView- ajustar automaticamente sua altura,
         posição ou preenchimento inferior com base na altura do teclado. */
        <KeyboardAvoidingView
        //Especifique como reagir à presença do teclado.
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.textTitulo}>Register</Text>      

            {/* Entrada: Email */}
            <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
            {/* Entrada: Password */}
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            type="text"
            onChangeText={(text) => setPassword(text)}
            value={password}
            />
            {/* Faz a verificaçao do erro, caso houver algum */}
            {errorRegister === true
            ?
                <View style={styles.contentAlert}>
                
                    <Icon style={styles.iconAlert} name="alert-circle-outline" ></Icon>
                    <Text style={styles.warningAlert}>Email ou senha inválida!</Text>
                </View>
            :
                <View/>
            } 
            {/* Faz a verificação dos campos, se for vazio,
             o botão ficará desabilitado através da propriedade disabled={true}  */}
            { email === "" || password === "" 
            ?
            <TouchableOpacity
            disabled={true}
            style={styles.buttonRegister}
            >
            <Text style={styles.textButtonRegister}>Register</Text>
            </TouchableOpacity>
            :
            /* Faz a verificação se os campos foram preenchidos corretamente
            ** registrará o usuario através do onPress={register}
            ** passando a funcao register no parametro
            */
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={register}
            >
            <Text style={styles.textButtonRegister}>Registrar</Text>
            </TouchableOpacity>

            }

            <Text style={styles.registration}>
            Já é registrado?
                <Text
                    style={styles.linkSubscribe}
            
                    onPress={() => navigation.navigate("Login")}
                    >
                Login
                </Text>
            </Text>
                <View style={{height: 100}} />
        </KeyboardAvoidingView>

        
    )

}