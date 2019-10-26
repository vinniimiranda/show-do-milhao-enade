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
              <h5>Errar</h5>
              <h4>PERDE TUDO</h4>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center ">
            <div className="info">
              <h5>Acertar</h5>
              <h4>100 MIL</h4>
            </div>
          </Grid>
          <Grid item xs={4} className="text-center ">
            <div className="info">
              <h5>Parar</h5>
              <h4>50 MIL</h4>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
