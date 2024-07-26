import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCoWtyhSFxxv2YMJGFQQog73Bjw0h0iVrs",
  authDomain: "ai-travel-palnnner.firebaseapp.com",
  projectId: "ai-travel-palnnner",
  storageBucket: "ai-travel-palnnner.appspot.com",
  messagingSenderId: "861316019527",
  appId: "1:861316019527:web:47444671edff422f6a0862",
  measurementId: "G-W4G7CW13F2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);