import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Inicio from './screens/Inicio';
import Mensajes from './screens/Mensajes';
import Cabanas from './screens/Cabanas';
import Precios from './screens/Precios';
import Historial from './screens/Historial';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Inicio':
                iconName = 'home-outline';
                break;
              case 'Mensajes':
                iconName = 'chatbox-ellipses-outline';
                break;
              case 'Cabañas':
                iconName = 'bed-outline';
                break;
              case 'Precios':
                iconName = 'pricetag-outline';
                break;
              case 'Historial':
                iconName = 'time-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Mensajes" component={Mensajes} />
        <Tab.Screen name="Cabañas" component={Cabanas} />
        <Tab.Screen name="Precios" component={Precios} />
        <Tab.Screen name="Historial" component={Historial} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
