import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👩🏽</Text>
      <Text style={styles.name}>Yasmin Porto</Text>

      <Text style={styles.info}>Turma: 3º Ano</Text>
      <Text style={styles.info}>Curso: Desenvolvimento de Sistemas</Text>
      <Text style={styles.bio}>
        Apaixonado por tecnologia e programação!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },

  avatar: {
    fontSize: 80
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10
  },


  info: {
    fontSize: 20, 
    marginBottom: 5
  },

  bio: {
    fontSize: 18,  
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});