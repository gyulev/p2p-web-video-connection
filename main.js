import './style.css';
import { initializeApp } from '@firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { servers, firebaseConfig } from './config';

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

let pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;
