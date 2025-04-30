import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function Mensajes() {
  const [mensaje, setMensaje] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarMensaje = async () => {
    if (!mensaje) return;

    setLoading(true);
    setRespuesta('');

    try {
      const response = await fetch('https://graph.facebook.com/v17.0/630393083492476/messages', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer EAAQm829mU2ABO3CUNLtxkknmolz1NLdxYJEj0WkktGtVNxgu53F9IGvlXZAeqX8A6R74iWBzFRP9J1SNihECekZBYRerJuaMFgG7kvRWDi9dB5DWusZCDYt67u4k2LHqnCBNlsCZCKrux6rbfp6ZCKzhnFjGML767rAP7boV2cyAQYvLhZCbFOelZBPeogAEAWMo1fX3jrq4OrsiQyuNCZBNHWr1YlAKFhBC5w1GWzUznJIZD',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: '5215562897019', // tu número de prueba o cliente
          type: 'text',
          text: { body: mensaje },
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        Alert.alert('Error', data.error.message || 'No se pudo enviar el mensaje.');
      } else {
        setRespuesta('✅ Mensaje enviado correctamente.\nPuedes revisar la respuesta en tu número de WhatsApp.');
      }
    } catch (err) {
      Alert.alert('Error', 'No se pudo conectar con el servidor.');
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Simular Mensaje al Bot</Text>

      <TextInput
        style={styles.input}
        multiline
        placeholder="Escribe algo como '¿cuánto cuesta la cabaña 5?'"
        value={mensaje}
        onChangeText={setMensaje}
      />

      <TouchableOpacity style={styles.button} onPress={enviarMensaje} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Enviando...' : 'Enviar mensaje'}</Text>
      </TouchableOpacity>

      {respuesta !== '' && <Text style={styles.response}>{respuesta}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#43A047',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  response: {
    marginTop: 24,
    fontSize: 16,
    color: '#333',
  },
});
