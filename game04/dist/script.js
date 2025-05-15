//preciso criar uma lista com 3 jogadores
herois = ["", "", ""]

viloes = ["", "", ""]

forcaHerois = 0
forcaViloes = 0

alert("O array Herois contem: " + herois)
for(let i=0; i<3; i++){
  escolhaHerois = prompt("Digite o nome do seu heroi" + (i + 1))
  herois[i] = escolhaHerois
  //calcular a força de cada jogador e depois somar para saber a força do time
  forcaHerois = forcaHerois + Math.floor(Math.random() * 10) + 1
  //forcaPersonagem += Math.floor(Math.random() * 10) + 1 //maneira mais avançada de fazer a mesma coisa
}
console.log("Agora, o array Heroi contem: " + herois)

console.log("inicioViloes:" + viloes)

for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5)
  viloesPossiveis = ["Orc", "Warg", "Uruk Hai", "Sauron", "Saruman"]
  viloes[i] = viloesPossiveis[indiceAleatorio]
  //calcular a força de cada jogador do time do computador viloes
  forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
}
console.log("finalViloes:" + viloes)


//comparar os dois times para saber quem venceu
if (forcaHerois > forcaViloes){
  alert("Seu time tem muita força! Você ganhou a guerra. Sua força foi " + forcaHerois)
}
else{
  if (forcaHerois < forcaViloes){
    alert("Seu time não teve força suficiente. O computador ganhou a guerra com força de " + forcaViloes)
  }
  else{
    alert("Você precisa treinar mais, os dois times tem a mesma força! Vocês empataram!")
  }
}