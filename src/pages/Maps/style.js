import { StyleSheet, Dimensions } from 'react-native';
/* 
#00f777
#01543a
#012026
#1c1c1c
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
    }, 
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      viewMaps:{
          marginTop: 50,
          padding: 40,
          backgroundColor: '#012026',
          elevation: 3,
          borderBottomRightRadius: 15
      },
      viewText: {
          color: '#fff',   
          textAlign: 'center',
          marginTop: 100,
          fontSize: 30,
          color: '#00f777'
          
      },
      span: {
          fontStyle: 'italic',
          color: '#ffff'
        },
    viewTextSlogan: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
    }
    
});

export default styles;
