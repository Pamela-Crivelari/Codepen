rodada = 1;
while (rodada <= 3) {
  console.log("rodada:" + rodada);
  
  caminho = prompt("Escolha um caminho");
  if (caminho > 5) {
    alert("Caminho Não liberado");
  }

  if (caminho <= 5) {
    escolhaJogador = prompt("Rodada " + rodada + ", Caminho (1,2,3,4 ou 5)?");
    caminhoComOrcs = Math.floor(Math.random() * 5) + 1;

    if (escolhaJogador == caminhoComOrcs) {
      // escolheu o caminho com Orcs, caminho perigoso
      alert("Um Orc te pegou! O jogo acabou para você...");
      rodada = 15;
    } else {
      alert(
        "Chegou ao final do caminho! Os Ents te protegeram...: " +
          caminhoComOrcs
      );
    }
    
    rodada = rodada + 1;
  }
}

// veio para cá quando rodada == 4

if (rodada == 3) {
  alert(
    "Você passou sem que os Orcs te percebessem e com a proteção dos Ents! Parabéns."
  );
}