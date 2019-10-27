const certaResposta = new Audio('../certaResposta.mp3')
const errou = new Audio('../errou.mp3')
const confirma = new Audio('../voceTemCerteza.mp3')
const parabens = new Audio('../parabens.mp3')
const bgAudio = new Audio('./bg.mp3');
  bgAudio.volume = 0.2;
  bgAudio.loop = true;

  bgAudio.play();

export default {
  certaResposta, 
  errou,
  confirma,
  parabens
}