import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InicioScreen from './src/screens/InicioScreen';
import DisciplinasScreen from './src/screens/DisciplinasScreen';
import TarefasScreen from './src/screens/TarefasScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' }, // cor do cabeçalho
          headerTintColor: '#fff',
          drawerActiveTintColor: '#4CAF50', // item ativo
        }}
      >
        <Drawer.Screen name="🏠 Início" component={InicioScreen} />
        <Drawer.Screen name="📚 Disciplinas" component={DisciplinasScreen} />
        <Drawer.Screen name="📝 Tarefas" component={TarefasScreen} />
        <Drawer.Screen name="👤 Perfil" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}