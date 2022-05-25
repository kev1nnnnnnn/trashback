import { StyleSheet } from 'react-native';
/* 
#00f777
#01543a
#012026
#1c1c1c
*/

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#012026'
    },
    viewLocal: {
 
    },
    btnLocal: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    iconLocal: {

    },
    textLocal: {
        color: '#696969',
        paddingTop: 7,
    },
    viewParceiros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20,
    }, 
    btnParceiros: {
        backgroundColor: '#00f777',
        padding: 15,
        width: 180,
        borderRadius: 10,
    
    },
    textParceiros: {
        color: '#1c1c1c',
        fontSize: 15,
        textAlign: 'center',
    },
    viewRenderShop: {
        marginTop: 30,
        marginLeft: 20,
    },
    btnIcon: {
        width:60,
        height: 60,
        backgroundColor: '#00f777',
        borderRadius: 150 / 2,
        left: 20,
        bottom: -200,
    },
    icon: {
        marginLeft: 16,
        marginTop: 13,
        elevation: 3,
    },
    viewShops: {
        marginTop: 10,
    },
    img: {
        width: 80, 
        height: 80,
        borderWidth: 1,
        borderColor: '#012026',
        borderRadius: 20,
        elevation: 3
    },
    textTop:  {
        borderTopWidth: 1,
        borderColor: '#00f777',
        paddingTop: 20,
        color: '#fff',
        fontSize: 15,
        marginTop: 15,
        paddingLeft: 20,

    }

});

export default styles;
