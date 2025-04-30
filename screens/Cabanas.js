import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const cabanas = [
  { id: '1', nombre: 'Cabaña #1', precio: '$2500', capacidad: '6 personas' },
  { id: '2', nombre: 'Cabaña #2', precio: '$2700', capacidad: '6 personas' },
  { id: '3', nombre: 'Cabaña #3', precio: '$2200', capacidad: '4 personas' },
  { id: '4', nombre: 'Cabaña #4 (SUITE)', precio: '$2900', capacidad: '6 personas con jacuzzy' },
  { id: '5', nombre: 'Cabaña #5 (SUITE)', precio: '$1300', capacidad: '2 personas con jacuzzy' },
  { id: '6', nombre: 'Habitaciones #6-9', precio: '$1600', capacidad: '4 personas c/u' },
  { id: '10', nombre: 'Cabañas #10-14', precio: '$2700', capacidad: '6 personas, corredor común' },
  { id: '15', nombre: 'Cabañas #15-16', precio: '$1300', capacidad: '2 personas, A/C' },
  { id: '17', nombre: 'Cabaña #17', precio: '$2900', capacidad: '6 personas, A/C en cada habitación' },
];

export default function Cabanas() {
  const abrirInfoWeb = (id) => {
    const url = `https://www.guamuchilparqueacuatico.com/caba%C3%B1as/caba%C3%B1a-${id}/`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cabañas disponibles</Text>

      <FlatList
        data={cabanas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => abrirInfoWeb(item.id)}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.texto}>Capacidad: {item.capacidad}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
            <Text style={styles.link}>Ver más detalles</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
    marginTop: 4,
  },
  precio: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
    color: '#1E88E5',
  },
  link: {
    marginTop: 8,
    color: '#388E3C',
    fontWeight: 'bold',
  },
});
