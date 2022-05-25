import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    linearGradientTasks: {
        paddingBottom: 20,
        height: 100
    },
    icon: {
        textAlign: 'center',
        position: 'absolute',
        marginLeft: '33%',
        paddingRight: 30,
        marginTop: '10%',
        paddingTop: 30,
        paddingLeft: 30,
        backgroundColor: '#fff',
        width: 60,
        height: 80,
        borderRadius: 10,
        borderColor: '#012026',
        borderWidth: 0.5,
    },
    title: {
        marginTop: 60,
        color: '#3c3c3c',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    title2: {
        color: '#3c3c3c',
        textAlign: 'center',
        fontSize: 18,
        
    },
   
    
    descriptionTask: {
        width: "75%",
        alignContent: 'flex-start',
        backgroundColor: '#F0F8FF',
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#38f9d7',
        marginRight: 25,
        color: '#1c1c1c',
        fontSize: 18,
    },

    buttonNewTask: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: '#38f9d7',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    btnProfile: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        marginLeft: 10,
        marginRight: 10,
    },
    iconProfile: {
        marginLeft: 10,
    },
    textProfile: {
        paddingBottom: 10,
        marginLeft: 20,
        textAlign: 'center'  ,
        fontSize: 19,
        color: '#1c1c1c'      
    },viewProfile: {
        
    }
});

export default styles;