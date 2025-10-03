import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>User Name</Text>
        <Text style={styles.points}>1200 pts</Text>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tab}>Personal</Text>
        <Text style={styles.tab}>Support</Text>
        <Text style={styles.tab}>History</Text>
        <Text style={styles.tab}>Orders</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Collect Points</Text>
        <TextInput style={styles.input} placeholder="Upload eSewa QR (url or id)" />
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Upload Payment Screenshot</Text></TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Redeem Points</Text>
        <TextInput style={styles.input} placeholder="Upload eSewa QR (url or id)" />
        <TextInput style={styles.input} placeholder="Withdrawal amount" keyboardType="number-pad" />
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Request Withdrawal</Text></TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text>About • Terms • Privacy • Logout</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 18, fontWeight: '700' },
  points: { fontWeight: '700' },
  tabs: { flexDirection: 'row', gap: 16, marginVertical: 12 },
  tab: { fontWeight: '700' },
  card: { backgroundColor: '#111827', padding: 12, borderRadius: 12, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#374151', borderRadius: 8, padding: 10, marginTop: 8 },
  btn: { marginTop: 10, backgroundColor: '#2563eb', padding: 12, alignItems: 'center', borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '700' },
});
