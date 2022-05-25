/* 
#00f777
#01543a
#012026
#1c1c1c
*/

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
       justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
    },
    textTitulo: {
        marginRight: 190,
        fontSize: 25,
        color: '#012026',
        fontWeight: 'bold',
    },
    textTitulo2: {
        marginBottom: 30,
        marginRight: 90,
        fontSize: 50,
        color: '#012026',
        fontWeight: 'bold',
    },
    button: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        backgroundColor: '#4267B2',
        padding:10,
        width: "80%",
    },
    buttonText: {
        color: '#fff',
    },
    input: {
        width: '80%',
        height: 50,
        margin: 12,
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#012026',
        borderWidth: 0.5,
    },
    buttonRegister: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#012026',
        padding: 8,
        borderRadius: 25,
    },
    textButtonRegister: {
        color: '#00f777',
        fontSize: 22,

    },
    textRegister: {
        marginTop: '10%',
        fontSize: 60,
        color:'#00f777',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },

    registration: {
        marginTop: 20,
        color: '#4d5156',
    },
    linkSubscribe: {
        color: '#012026',
        fontWeight: '600',
        fontSize: 16,
    },
    iconAlert: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#4d5156'
    },
    warningAlert: {
        color: '#4d5156'
    },
  
});

export default styles;