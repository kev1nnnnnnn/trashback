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
        marginBottom: '10%',
        textAlign: 'center',
        fontSize: 60,
        color: '#ff7801',
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
        borderBottomWidth: 1,
        borderBottomColor: '#ff7801',
        padding: 10,
    },
    buttonRegister: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#ff7801',
        padding: 8,
        borderRadius: 25,
    },
    textButtonRegister: {
        color: '#fff',
        fontSize: 22,

    },
    textRegister: {
        marginTop: '10%',
        fontSize: 60,
        color:'#ff7801',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },

    registration: {
        marginTop: 20,
        color: '#4d5156',
    },
    linkSubscribe: {
        color: '#ff7801',
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