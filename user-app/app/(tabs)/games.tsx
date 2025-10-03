import React from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function GamesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Games</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Create Tournament</Text>
        <TextInput style={styles.input} placeholder="Title (e.g., Free Fire 1v1)" />
        <TextInput style={styles.input} placeholder="Mode (1v1/2v2/3v3/4v4)" />
        <TextInput style={styles.input} placeholder="Entry points" keyboardType="number-pad" />
        <TextInput style={styles.input} placeholder="Start date/time" />
        <TextInput style={styles.input} placeholder="Game username" />
        <Text style={styles.sub}>Options</Text>
        <TextInput style={styles.input} placeholder="Limited ammo: yes/no" />
        <TextInput style={styles.input} placeholder="Rounds" keyboardType="number-pad" />
        <TextInput style={styles.input} placeholder="Character skills: yes/no" />
        <TextInput style={styles.input} placeholder="Coin in-game" />
        <TextInput style={styles.input} placeholder="Gun attributes: yes/no" />
        <TextInput style={styles.input} placeholder="Headshot: yes/no" />
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Create</Text></TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Join Tournament</Text>
        <Text>List of tournaments (mock)</Text>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Join (pay points)</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  sub: { fontSize: 14, fontWeight: '600', marginTop: 6 },
  card: { backgroundColor: '#111827', padding: 12, borderRadius: 12, marginVertical: 8 },
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#374151', borderRadius: 8, padding: 10, marginTop: 8 },
  btn: { marginTop: 12, backgroundColor: '#22c55e', padding: 12, alignItems: 'center', borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '700' },
});
