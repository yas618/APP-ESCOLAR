import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>📱 Portal do Aluno</Text>
      <Text style={styles.subtitle}>Bem-vindo!</Text>

      <Text style={styles.text}>
        Este aplicativo ajuda você a acompanhar suas disciplinas,
        tarefas e informações escolares de forma simples e rápida.
      </Text>

      {/* 👇 MENU AGORA FICA EMBAIXO DO TEXTO */}
      <View style={styles.menu}>
        <Button
          title="☰ Abrir Menu"
          onPress={() => navigation.openDrawer()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F5E9'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },

  subtitle: {
    fontSize: 22,
    marginBottom: 10
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },

  menu: {
    marginTop: 10
  }
});