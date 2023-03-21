/*-Relógio */

// Pega os elementos HTML onde o relógio e a data serão exibidos
const clock = document.getElementById("clock");
const date = document.getElementById("date");
// pega o elemento da imagem
const fullScreenImage = document.getElementById("fullscreen");
// Pega o elemento da imagem "tema-claro"
const temaClaro = document.getElementById("dark"); 

// Define a função que atualiza o relógio
function updateClock() {
  // Pega a data e hora atuais
  const now = new Date();

  // Formata a data e hora e as exibe nos elementos HTML
  const time = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();
  clock.textContent = time;
  date.textContent = dateString;
}

// Chama a função de atualização a cada segundo
setInterval(updateClock, 1000);

// Define a variável de controle para alternar entre o gradiente branco e o padrão
let isWhiteGradient = false;

// Adiciona o manipulador de eventos de clique para a imagem FullScreen
fullScreenImage.addEventListener("click", function(F11) {
  // Aciona o botão F11
  document.documentElement.requestFullscreen();
  });

/* -------------------- Tema claro --------------------- */

// Adiciona o manipulador de eventos de clique para a imagem "tema-claro"
dark.addEventListener("click", function() {
  if (!isWhiteGradient) {
    // Altera o valor do atributo background do body para o gradiente branco
    document.body.style.background = "linear-gradient(to bottom, #FFDEE9, #B5FFFC)";
    isWhiteGradient = true;
  } else {
    // Altera o valor do atributo background do body para o padrão
    document.body.style.background = "";
    isWhiteGradient = false;
  }
});
