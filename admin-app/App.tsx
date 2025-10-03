import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [tab, setTab] = React.useState<'users' | 'tournaments' | 'topups' | 'store' | 'notifications'>('users');
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>Admin Dashboard</Text>
      </View>
      <View style={styles.tabs}>
        {(['users','tournaments','topups','store','notifications'] as const).map((t) => (
          <TouchableOpacity key={t} onPress={() => setTab(t)} style={[styles.tab, tab===t && styles.tabActive]}>
            <Text style={[styles.tabText, tab===t && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={{ padding: 12 }}>
        {tab === 'users' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Users & Points</Text>
            <Text>List users, search, adjust points, view profiles</Text>
          </View>
        )}
        {tab === 'tournaments' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Manage Tournaments</Text>
            <TextInput placeholder="Search tournament" style={styles.input} />
            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Create New Tournament</Text></TouchableOpacity>
          </View>
        )}
        {tab === 'topups' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Approve Top-ups</Text>
            <Text>Review payment screenshots and approve/deny</Text>
          </View>
        )}
        {tab === 'store' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Store Inventory</Text>
            <Text>Manage Free Fire diamonds, Google Play cards, transactions</Text>
          </View>
        )}
        {tab === 'notifications' && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Notifications</Text>
            <Text>Send push notifications and review history</Text>
          </View>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b1220' },
  topbar: { paddingTop: 40, paddingBottom: 12, paddingHorizontal: 12, backgroundColor: '#0f172a' },
  title: { color: '#fff', fontSize: 18, fontWeight: '700' },
  tabs: { flexDirection: 'row', padding: 8, gap: 8, backgroundColor: '#0f172a' },
  tab: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, backgroundColor: '#111827' },
  tabActive: { backgroundColor: '#1f2937' },
  tabText: { color: '#cbd5e1', textTransform: 'capitalize' },
  tabTextActive: { color: '#fff' },
  card: { backgroundColor: '#111827', padding: 12, borderRadius: 12, marginBottom: 10 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: '700', marginBottom: 8 },
  input: { backgroundColor: '#0b1220', borderWidth: 1, borderColor: '#334155', borderRadius: 8, padding: 10, color: '#fff' },
  btn: { marginTop: 10, backgroundColor: '#2563eb', padding: 12, alignItems: 'center', borderRadius: 10 },
  btnText: { color: '#fff', fontWeight: '700' },
});
