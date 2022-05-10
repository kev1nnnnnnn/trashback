import {StyleSheet} from 'react-native';
/* 
#00f777
#01543a
#012026
#1c1c1c
*/

const styles = StyleSheet.create({ 

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#012026',
    paddingTop: 50,
    paddingBottom: 20,
    marginBottom: 15,
    //   borderBottomRightRadius: 150 / 2,
    //   borderBottomLeftRadius: 150 / 2,
  },
  iconAlert: {
    fontSize: 45,
    color: '#fff',
    marginRight: 30,
  },
  iconPlus: {
    fontSize: 40,
    color: '#fff',
    marginRight: 15,
  },
  imgShop: {
    width: 60,
    height: 60,
    marginLeft: 30,
  },
  viewProductsPoints: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor: '#01543a',
      borderColor: '#012026',
      borderWidth: 1,
      borderRadius: 20,
      borderStyle: 'solid',
      padding: 5,
      borderBottomWidth: 1
  },

  imgRender: {
    width: 60,
    height: 60, 
    
  },
  title: {
    color: '#fff',
    fontFamily: ''
  },
  textPoints: {
    color: '#fff',
  },

});

export default styles;