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
        backgroundColor: '#f1f1f1',
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
        borderRadius: 5,
    
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
        bottom: -250,
    },
    icon: {
        marginLeft: 16,
        marginTop: 13,
        elevation: 3,
    },
    viewShops: {
        borderTopWidth: 1,
        borderColor: '#fff',
        marginTop: 20,
        height: 200,
    }

});

export default styles;
