import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, Modal, View as RNView, TextInput, Image as RNImage } from 'react-native';
import { Text, View } from '@/components/Themed';
import SvgQRCode from 'react-native-qrcode-svg';
import * as ImagePicker from 'expo-image-picker';

const promotions = [
  { id: '1', title: 'Big Tournament Weekend', image: require('@/assets/images/splash-icon.png') },
  { id: '2', title: 'Top-up Bonus 10%', image: require('@/assets/images/icon.png') },
];

const upcomingMatches = [
  { id: 'm1', title: 'Free Fire Duo - 8pm', entryPoints: 50 },
  { id: 'm2', title: 'Free Fire Squad - 9pm', entryPoints: 80 },
];

export default function HomeScreen() {
  const [topupOpen, setTopupOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [screenshotUri, setScreenshotUri] = React.useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <FlatList
        data={promotions}
        keyExtractor={(i) => i.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: 120 }}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <View style={styles.banner}>
            <Image source={item.image} style={styles.bannerImage} />
            <Text style={styles.bannerText}>{item.title}</Text>
          </View>
        )}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Matches</Text>
        {upcomingMatches.map((m) => (
          <View key={m.id} style={styles.card}>
            <Text style={styles.cardTitle}>{m.title}</Text>
            <Text>Entry: {m.entryPoints} pts</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>Join</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.topupButton} onPress={() => setTopupOpen(true)}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Top-up Points</Text>
      </TouchableOpacity>

      <Modal visible={topupOpen} transparent animationType="slide" onRequestClose={() => setTopupOpen(false)}>
        <RNView style={styles.modalBackdrop}>
          <RNView style={styles.modalCard}>
            <Text style={styles.modalTitle}>Add Points</Text>
            <RNView style={{ alignItems: 'center', marginVertical: 8 }}>
              <SvgQRCode value={'esewa:owner-id'} size={160} />
            </RNView>
            <TextInput
              style={styles.input}
              placeholder="Enter points to add"
              keyboardType="number-pad"
              value={amount}
              onChangeText={setAmount}
            />
            <TouchableOpacity
              style={styles.btnUpload}
              onPress={async () => {
                const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (!perm.granted) return;
                const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
                if (!res.canceled) {
                  setScreenshotUri(res.assets[0].uri);
                }
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '700' }}>Upload Payment Screenshot</Text>
            </TouchableOpacity>
            {screenshotUri ? (
              <RNImage source={{ uri: screenshotUri }} style={{ height: 160, marginTop: 10, borderRadius: 8 }} resizeMode="cover" />
            ) : null}
            <TouchableOpacity style={styles.btnClose} onPress={() => setTopupOpen(false)}>
              <Text style={{ fontWeight: '700' }}>Close</Text>
            </TouchableOpacity>
          </RNView>
        </RNView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 32 },
  header: { fontSize: 24, fontWeight: '700', paddingHorizontal: 16, marginBottom: 12 },
  banner: { width: 240, height: 100, marginRight: 12, borderRadius: 12, overflow: 'hidden', backgroundColor: '#111' },
  bannerImage: { width: '100%', height: '100%', opacity: 0.6 },
  bannerText: { position: 'absolute', bottom: 8, left: 12, color: '#fff', fontWeight: '700' },
  section: { paddingHorizontal: 16, marginTop: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  card: { padding: 12, backgroundColor: '#1f2937', borderRadius: 12, marginBottom: 10 },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  joinButton: { marginTop: 8, paddingVertical: 8, alignItems: 'center', backgroundColor: '#2563eb', borderRadius: 8 },
  topupButton: { position: 'absolute', right: 16, bottom: 24, paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#22c55e', borderRadius: 999 },
  modalBackdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: '#111827', padding: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#374151', borderRadius: 8, padding: 10, marginTop: 8 },
  btnUpload: { marginTop: 10, backgroundColor: '#2563eb', padding: 12, alignItems: 'center', borderRadius: 10 },
  btnClose: { marginTop: 10, backgroundColor: '#e5e7eb', padding: 12, alignItems: 'center', borderRadius: 10 },
});
