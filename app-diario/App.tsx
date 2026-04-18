import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Inicio from './src/telas/Inicio';
import InicioLoginPress from './src/telas/InicioLoginPress';
import CartaoTopico from './src/componentes/CartaoTopico';

export default function App() {
  return (
    <View style={estilos.container}>
      <CartaoTopico
        nome="Qualquer"
        materiaVinculada="português"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

