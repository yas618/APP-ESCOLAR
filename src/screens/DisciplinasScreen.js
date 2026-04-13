import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DisciplinasScreen() {
  const disciplinas = [
    "Matemática ⭐",
    "Português",
    "Banco de Dados",
    "React Native"
  ];

  return (
    <View style={styles.container}>
      {disciplinas.map((disc, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>{disc}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    backgroundColor: '#C8E6C9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  text: { fontSize: 18 }
});