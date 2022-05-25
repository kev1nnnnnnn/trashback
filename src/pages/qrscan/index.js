import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './style';
import Icon from "react-native-vector-icons/Ionicons";

export default function Qrscan({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

 

  const handleBarCodeScanned = ({ type, data, counter }) => {
    setScanned(true);
    counter = scanned + 10;
    alert(`Parabéns por contribuir com o nosso meio ambiente! \n\ntipo de reciclagem: ${data} \n\nvocê ganhou:  ${counter} trashcoins.`);
    navigation.navigate("Shops");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //realiza a soma dos pontos
  


  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name='arrow-back-outline' />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

