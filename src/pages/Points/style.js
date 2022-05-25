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
    color: '#00f777',
    marginRight: 30,
  },
  iconPlus: {
    fontSize: 40,
    color: '#012026',
    marginRight: 15,
  },
  imgShop: {
    width: 60,
    height: 60,
    marginLeft: 30,
    borderRadius: 10,
  },
  viewProductsPoints: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginRight: 10,
      marginLeft: 10,
      marginBottom: 5,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 10,
      padding: 10,
      elevation: 3,
  },

  imgRender: {
    width: 60,
    height: 60, 
    
  },
  title: {
    color: '#012026',
    fontFamily: ''
  },
  textPoints: {
    color: '#012026',
  },
  btnPoints: {
    backgroundColor: '#012026',
    padding: 10,
    marginBottom: 70,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#00f777',
  },

});

export default styles;