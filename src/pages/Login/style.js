
/* 
#00f777
#01543a
#012026
#1c1c1c
*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    
    button: {
        marginTop: 20,
        marginBottom: 20,
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
        margin: 20,
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#012026',
        borderWidth: 0.5,
    },
    buttonLogin: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#012026',
        padding: 8,
        borderRadius: 25,
    },
    textButtonLogin: {
        color: '#00f777',
        fontSize: 22,

    },
    textLogin: {
        marginTop: '10%',
        fontSize: 60,
        color:'#00f777',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    textTitulo: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 23,
        color: '#1c1c1c',
        fontWeight: 'bold',
    },
    ou: {
        textAlign: 'center',
        marginTop:20,
        fontWeight: 'bold',
    },
    imgLogo: {
        marginTop: '18%',
        width: 400,
        height: 200,
        alignSelf: 'center',
    },
    registration: {
        marginTop: 20,
        color: '#012026',
    },
    linkSubscribe: {
        color: 'blue',
        fontWeight: '600',
        fontSize: 16,
    },
    iconAlert: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 10,
        color: '#012026'
    },
    warningAlert: {
        color: '#4d5156'
    },
    btnCreateSupermarket: {
        marginTop: '3%',
        width: '50%',
        height: '4%',
    },
    textSupermarket: {
        color: 'blue',
        top: 5,
        textAlign: 'center',
        fontSize: 15,
    },
  
});

export default styles;