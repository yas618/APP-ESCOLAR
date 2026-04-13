import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TarefasScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>✔ Entregar atividade</Text>
        <Text>Lógica de programação</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>⏳ Revisar conteúdo</Text>
        <Text>Navegação Drawer</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>✔ Estudar</Text>
        <Text>Banco de Dados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: '#FFF9C4',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  title: { fontSize: 16, fontWeight: 'bold' }
});