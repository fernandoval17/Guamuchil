import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Inicio() {
  const [apiToken, setApiToken] = useState('TOKEN_ACTUAL'); // Reemplaza con tu token real
  const [isConnected, setIsConnected] = useState(true); // Puedes actualizar esto con una validación real

  const handleSaveToken = () => {
    // Aquí puedes guardar el token en almacenamiento local
    Alert.alert('Token actualizado', 'Tu token fue guardado correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del Bot</Text>
      <Text style={[styles.status, { color: isConnected ? 'green' : 'red' }]}>
        {isConnected ? 'Conectado a WhatsApp' : 'Desconectado'}
      </Text>

      <Text style={styles.label}>Token de API</Text>
      <TextInput
        style={styles.input}
        value={apiToken}
        onChangeText={setApiToken}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveToken}>
        <Text style={styles.buttonText}>Guardar Token</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
