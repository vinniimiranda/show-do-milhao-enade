import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "react-toastify/dist/ReactToastify.css";
import audio from  './bg.mp3'
import "./App.css";

function App() {
  const notifySucces = () => toast.success("Reposta Correta");
  const notifyError = () => toast.error("Reposta Incorreta");
  const bgAudio = new Audio(audio);
  bgAudio.volume = 0.6;
  bgAudio.loop = true;

  bgAudio.play();

  const [respostas, setRespostas] = useState([
    {
      option: "A",
      value: "Encapsulamento",
      correct: true
    },
    {
      option: "B",
      value: "Atributo Privado",
      correct: false
    },
    {
      option: "C",
      value: "Atributo Protegido",
      correct: false
    },
    {
      option: "D",
      value: "Atributo Abstrato",
      correct: false
    },
    {
      option: "E",
      value: "Herança",
      correct: false
    }
  ]);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <ToastContainer
          enableMultiContainer
          position={toast.POSITION.TOP_RIGHT}
        />
        <Grid container spacing={2} className="container">
          <Grid item xs={12} style={{ textAlign: "center" }}></Grid>
          <Grid item xs={12}>
            <div className="question-card">
              <p className="question">
                Na programação como é chamado o conceito que protege um atributo
                no modelo de Classes?
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            {respostas.map(resposta => (
              <div className="answer" key={resposta.option}>
                <div
                  className="option"
                  onClick={() => {
                    if (resposta.correct) {
                      notifySucces();
                    } else {
                      notifyError();
                    }
                  }}
                >
                  <span className="number">{resposta.option}</span>
                  <span className="text"> {resposta.value}</span>
                </div>
              </div>
            ))}
          </Grid>
          <Grid item xs={4} className="text-center ">
            <div className="info">
              <span>Errar</span><br/>
              <span className="valores">PERDE TUDO</span>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center ">
            <div className="info">
              <span>Acertar</span><br/>
              <span className="valores">100 MIL</span>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center ">
            <div className="info">
              <span>Parar</span><br/>
              <span className="valores">50 MIL</span>
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="menu">
              <img src="http://icons.iconarchive.com/icons/icons-land/metro-raster-sport/256/Casino-Playing-Cards-icon.png"  /><br/>
              <span>Cartas</span>
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="menu">
              <img src="https://www.freeiconspng.com/uploads/right-arrow-icon-114837-11.png"  /><br/>
              <span>Pular</span>
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="menu">
              <img src="https://cdn0.iconfinder.com/data/icons/education-learning/128/123-blocks2-512.png"  /><br/>
              <span>Placas</span>
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="menu">
              <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/people-512.png"  /><br/>
              <span>Convidados</span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
