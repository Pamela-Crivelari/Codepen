idade = prompt("Quantos anos você tem?");
if (idade < 18) {
  alert("Você NÃO pode jogar");
}

// alert("Vamos começar a jogar!")

if (idade >= 18) {
  escolhaJogador = prompt("Digite 1-Espada, 2-Lança ou 3-Arco e Flecha");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  // Jogador Espada, Computador Espada --> empate!
  // Jogador Lança, Computador Lança --> empate!
  // Jogador Arco e Flecha, Computador Arco e Flecha --> empate!

  if (escolhaJogador == escolhaComputador) {
    alert("empate!");
  }

  // Jogador Espada, Computador Lança --> jogador vence!

  if (escolhaJogador == 1) {
    if (escolhaComputador == 3) alert("computador perdeu, escolheu Lança");
  }
  // Jogador Espada, Computador Arco e Flecha --> computador vence!

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2)
      alert("computador venceu, escolheu Arco e Flecha");
  }

  // Jogador Lança, Computador Arco e Flecha --> jogador vence!
  if (escolhaJogador == 3) {
    if (escolhaComputador == 1)
      alert("computador venceu, escolheu Arco e Flecha");
  }
  // Jogador Lança, Computador Espada --> computador vence!
  if (escolhaJogador == 3) {
    if (escolhaComputador == 2) alert("computador perdeu, escolheu Espada");
  }

  // Jogador Arco e Flecha, Computador Espada --> jogador vence!
  if (escolhaJogador == 2) {
    if (escolhaComputador == 1) alert("computador perdeu, escolheu Espada");
  }
  // Jogador Arco e Flecha, Computador Lança --> computador vence!
  if (escolhaJogador == 2) {
    if (escolhaComputador == 3) alert("computador venceu, escolheu Lança");
  }
}

{
  alert("escolhaComputador: " + escolhaComputador);
}
