import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

let app = getApps()[0];
if (!app) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
