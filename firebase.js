// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Sua configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXWTDbnAm0Oylp0PpSmLMOqQ-rJx6vOcA",
  authDomain: "recrutamento-23285.firebaseapp.com",
  projectId: "recrutamento-23285",
  storageBucket: "recrutamento-23285.appspot.com",
  messagingSenderId: "252455340402",
  appId: "1:252455340402:web:b12b2da550db35a74ff5eb",
  measurementId: "G-Y2XSQE99GM"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);
