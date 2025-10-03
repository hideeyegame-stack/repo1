# Gaming Platform - User & Admin Apps (Expo + Firebase)

This repository contains the User mobile app scaffolded with Expo Router (TypeScript) and an Admin app scaffolded with Expo (TypeScript).

## Features (User App)
- Google login (stub via Expo AuthSession + Firebase Auth)
- Home: promotions banner, upcoming matches list, floating Top-up button
- Store: purchase placeholders, eSewa QR display + amount input + upload button
- Games: create/join tournament form (UI only)
- Notifications: basic list
- Profile: points, collect/redeem UI sections, about/terms/privacy/logout placeholders

## Getting Started
1. Install prerequisites: Node 18+, npm, Android Studio (for emulator) or Expo Go on device.
2. Create the app config file:
   - Copy `user-app/firebaseConfig.example.ts` to `user-app/firebaseConfig.ts` and fill your Firebase keys.
   - Add an `.env` or set `EXPO_PUBLIC_GOOGLE_CLIENT_ID` with your OAuth Client ID.
3. Install deps:
   ```bash
   cd user-app
   npm install
   ```
4. Run the User app:
   ```bash
   npm run android
   # Or: npm run web
   ```

### Admin App
1. Install deps:
   ```bash
   cd admin-app
   npm install
   ```
2. Run:
   ```bash
   npm run android
   # Or: npm run web
   ```

## Notes
- Auth is wired for Google via access token exchange and `signInWithCredential`. For production, use a secure flow (PKCE, server checks) and configure SHA certs for Android.
- eSewa integration is UI-only; replace with your actual QR value and implement backend to verify payments and credit points.
- Tournaments and store are mocked; hook into Firestore or your API.

## Admin App (Current)
- Tabs for Users, Tournaments, Top-ups, Store, Notifications (UI scaffold)
- Replace placeholders with your backend (Firestore/REST) and add auth/roles
