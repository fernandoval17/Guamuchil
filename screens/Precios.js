import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function Precios() {
  const abrirLinkCuponera = () => {
    Linking.openURL(
      'https://www.mercadopago.com.mx/payment-link/v1/redirect?preference-id=94334174-ec90bbb2-f268-4e96-a2fe-bf042118a0c7&source=link'
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Precios de Entrada</Text>

      <View style={styles.card}>
        <Text style={styles.item}>🎟️ Adultos: <Text style={styles.price}>$180 MXN</Text></Text>
        <Text style={styles.item}>👦 Niños (90 cm – 1.5 m): <Text style={styles.price}>$120 MXN</Text></Text>
        <Text style={styles.item}>👶 Menores de 90 cm: <Text style={styles.price}>Entrada gratuita</Text></Text>
      </View>

      <Text style={styles.subtitle}>🎁 Cuponera promocional</Text>
      <View style={styles.card}>
        <Text style={styles.item}>💵 Valor real: +$1,500 MXN en descuentos</Text>
        <Text style={styles.item}>🛍️ Precio actual: <Text style={styles.price}>$199 MXN</Text> (por tiempo limitado)</Text>
        <Text style={styles.item}>✅ 20 cupones de 50% en entradas (chico o grande)</Text>
        <Text style={styles.item}>🎉 1 bono de bienvenida: entrada por $50 MXN</Text>
        <Text style={styles.item}>📅 Vigente hasta: 30 de septiembre de 2025</Text>
        <Text style={styles.item}>🚫 No válida: 17 Mar, Semana Santa (14-20 Abr), ni 1 May</Text>
        <Text style={styles.note}>* Se entrega en físico en taquilla mostrando tu comprobante</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={abrirLinkCuponera}>
        <Text style={styles.buttonText}>Comprar Cuponera</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    color: '#1E88E5',
    fontWeight: '600',
  },
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 8,
    color: '#555',
  },
  button: {
    backgroundColor: '#43A047',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
