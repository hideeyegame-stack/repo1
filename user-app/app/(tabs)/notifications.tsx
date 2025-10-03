import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

const data = [
  { id: '1', text: 'Points added: +100' },
  { id: '2', text: 'Joined: Free Fire Duo 8pm' },
  { id: '3', text: 'Tournament ID/Password received' },
  { id: '4', text: 'Result: Win +200 pts' },
];

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {data.map((n) => (
        <View key={n.id} style={styles.item}>
          <Text>{n.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  item: { padding: 12, backgroundColor: '#111827', marginBottom: 8, borderRadius: 10 },
});
