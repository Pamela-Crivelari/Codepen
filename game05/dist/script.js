// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual o nome do hobbit que encontra o Um Anel?",
    respostas: [
      { opcao: "Bilbo Bolseiro", correto: true },
      { opcao: "Frodo Bolseiro", correto: false },
      { opcao: "Samwise Gamgee", correto: false }
    ]
  },
  {
    pergunta: "Qual a raça da criatura Gollum?",
    respostas: [
      { opcao: "Elfo", correto: false },
      { opcao: "Hobbit", correto: true },
      { opcao: "Humano", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome da espada quebrada que é reforjada para Aragorn?",
    respostas: [
      { opcao: "Glamdring", correto: false },
      { opcao: "Sting", correto: false },
      { opcao: "Andúril", correto: true }
    ]
  },
  {
    pergunta:
      "Quem lidera os exércitos de Rohan na Batalha dos Campos de Pelennor?",
    respostas: [
      { opcao: "Théoden", correto: true },
      { opcao: "Éomer", correto: false },
      { opcao: "Gandalf", correto: false }
    ]
  },
  {
    pergunta: "Qual a montanha vulcânica onde o Um Anel deve ser destruído?",
    respostas: [
      { opcao: "Montanha da Perdição", correto: true },
      { opcao: "Caradhras", correto: false },
      { opcao: "Gundabad", correto: false }
    ]
  },
  {
    pergunta:
      "Qual o nome da floresta ancestral e misteriosa perto do Condado?",
    respostas: [
      { opcao: "A Floresta Tenebrosa", correto: false },
      { opcao: "A Floresta de Fangorn", correto: false },
      { opcao: "A Velha Floresta", correto: true }
    ]
  },
  {
    pergunta: "Quem é o líder dos Nazgûl, os Espectros do Anel?",
    respostas: [
      { opcao: "Saruman", correto: false },
      { opcao: "O Rei Bruxo de Angmar", correto: true },
      { opcao: "Sauron", correto: false }
    ]
  },
  {
    pergunta:
      "Qual a cidade élfica escondida onde Frodo se recupera após ser ferido?",
    respostas: [
      { opcao: "Valfenda (Rivendell)", correto: true },
      { opcao: "Lothlórien", correto: false },
      { opcao: "As Torres Cinzentas", correto: false }
    ]
  },
  {
    pergunta: "Qual o nome do dragão que é derrotado por Bard, o Arqueiro?",
    respostas: [
      { opcao: "Smaug", correto: true },
      { opcao: "Glaurung", correto: false },
      { opcao: "Ancalagon, o Negro", correto: false }
    ]
  },
  {
    pergunta:
      "Qual a dádiva que os Valar concedem aos Elfos que partem para Valinor?",
    respostas: [
      { opcao: "Imortalidade", correto: true },
      { opcao: "Grande poder mágico", correto: false },
      { opcao: "A capacidade de voar", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();