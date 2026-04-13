import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Portal do Aluno</Text>
      <Text style={styles.subtitle}>Bem-vindo!</Text>
      <Text style={styles.text}>
        Este aplicativo ajuda você a acompanhar suas disciplinas,
        tarefas e informações escolares de forma simples e rápida.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E8F5E9' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 20, marginBottom: 10 },
  text: { fontSize: 16 }
});