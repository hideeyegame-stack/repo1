import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { Link, Redirect } from 'expo-router';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged, signOut } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  if (user) {
    return <Redirect href="/" />;
  }

  const handleGoogle = async () => {
    try {
      setLoading(true);
      const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
      const discovery = {
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenEndpoint: 'https://oauth2.googleapis.com/token',
      };
      const clientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;

      const response = await AuthSession.startAsync({
        authUrl:
          `${discovery.authorizationEndpoint}?` +
          `client_id=${clientId}` +
          `&redirect_uri=${encodeURIComponent(redirectUri)}` +
          `&response_type=token` +
          `&scope=${encodeURIComponent('profile email')}`,
      });

      if ((response as any).type === 'success') {
        const accessToken = (response as any).params.access_token;
        const credential = GoogleAuthProvider.credential(null, accessToken);
        await signInWithCredential(auth, credential);
      }
    } catch (e: any) {
      Alert.alert('Login error', e?.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoogle} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Continue with Google</Text>}
      </TouchableOpacity>
      <View style={{ height: 16 }} />
      <Link href="/">
        <Text>Skip for now</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
  button: { backgroundColor: '#4285F4', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 8, minWidth: 240, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
