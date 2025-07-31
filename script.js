// Importa Firestore e funções necessárias
import { db } from './firebase.js'; // Certifique que exportou o objeto db no firebase.js
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Seleciona o formulário e elementos da interface
const form = document.getElementById('jobForm');
const mensagemEnvio = document.getElementById('mensagemEnvio');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita reload da página

  // Coleta os dados do formulário de forma simples
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    // Salva no Firestore na coleção "candidaturas"
    await addDoc(collection(db, 'candidaturas'), data);

    // Limpa mensagens de erro se houver
    mensagemEnvio.textContent = "";
    
    // Esconde o formulário
    form.style.display = 'none';

    // Mostra a mensagem de agradecimento (div que estava escondida)
    document.getElementById('agradecimento').classList.remove('hidden');

  } catch (error) {
    // Mostra mensagem de erro e log no console
    mensagemEnvio.textContent = "Erro ao enviar. Tente novamente.";
    mensagemEnvio.style.color = "red";
    console.error("Erro Firebase:", error);
  }
});
