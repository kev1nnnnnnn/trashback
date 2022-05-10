import * as React from 'react';
import Navigation from './routes';

import  {NavigationContainer} from '@react-navigation/native'


export default function App() {
  
  return (
  <NavigationContainer>
    <Navigation/>
  </NavigationContainer>
  );
}