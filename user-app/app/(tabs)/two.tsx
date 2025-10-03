import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import SvgQRCode from 'react-native-qrcode-svg';

export default function StoreScreen() {
  const [qrValue, setQrValue] = React.useState('esewa:owner-id');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store</Text>
      <View style={{ height: 20 }} />
      <Text>Buy Diamonds, Google Play cards (mock)</Text>
      <View style={{ height: 20 }} />
      <Text style={styles.subtitle}>Top-up via eSewa QR</Text>
      <View style={{ alignItems: 'center', marginVertical: 12 }}>
        <SvgQRCode value={qrValue} size={160} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter points to add"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Upload Payment Screenshot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '700' },
  subtitle: { fontSize: 16, fontWeight: '600' },
  input: { marginTop: 8, borderWidth: 1, borderColor: '#374151', borderRadius: 8, padding: 10 },
  btn: { marginTop: 12, backgroundColor: '#2563eb', padding: 12, alignItems: 'center', borderRadius: 10 },
});
