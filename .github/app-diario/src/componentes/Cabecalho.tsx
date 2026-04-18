import {View, Text, StyleSheet} from 'react-native';

 type CabecalhoProps = {
  titulo: string;
  subtitulo?: string;
};

export default function Cabecalho({titulo, subtitulo = ""}: CabecalhoProps) {
  return (
    <View style={estilos.container}>
      <Text>{titulo}</Text>
      {subtitulo && <Text>{subtitulo}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});