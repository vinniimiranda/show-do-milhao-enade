import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Audio from "./audio/index";
import Cards from "./icons/cards";
import Numbers from "./icons/numbers";
import Arrow from "./icons/arrow";
import Guests from "./icons/guests";

function App() {
  const [errou, setErrou] = useState(false);
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

  const submit = resposta => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Você tem certeza disso?</h1>
            <p>Deseja confirmar sua resposta?</p>
            <button onClick={onClose}>Não</button>
            <button
              onClick={() => {
                if (resposta.correct) {
                  Audio.certaResposta.play();
                  // notifySuccess()
                } else {
                  Audio.errou.play();
                  setErrou(true)
                }
                onClose();
              }}
            >
              Sim
            </button>
          </div>
        );
      }
    });
  };

  return (
    <div className="App">
      <Container maxWidth="sm" className="container">
        <ToastContainer
          enableMultiContainer
          position={toast.POSITION.TOP_RIGHT}
        />
        <Grid container spacing={1}>
          {!errou ? (
            <>
              <Grid item xs={12} style={{ textAlign: "center" }}></Grid>
              <Grid item xs={12}>
                <div className="question-card">
                  <p className="question">
                    Na programação como é chamado o conceito que protege um
                    atributo no modelo de Classes?
                  </p>
                </div>
              </Grid>
              <Grid item xs={12}>
                {respostas.map(resposta => (
                  <div className="answer" key={resposta.option}>
                    <div
                      className="option"
                      onClick={() => {
                        Audio.confirma.play();
                        submit(resposta);
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
                  <span>Errar</span>
                  <br />
                  <span className="valores">PERDE TUDO</span>
                </div>
              </Grid>
              <Grid item xs={4} className="text-center ">
                <div className="info">
                  <span>Acertar</span>
                  <br />
                  <span className="valores">100 MIL</span>
                </div>
              </Grid>
              <Grid item xs={4} className="text-center ">
                <div className="info">
                  <span>Parar</span>
                  <br />
                  <span className="valores">50 MIL</span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="menu">
                  <Cards fill="#013161" />
                  <br />
                  <span>Cartas</span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="menu">
                  <Arrow fill="#013161" />
                  <br />
                  <span>Pular</span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="menu">
                  <Numbers fill="#013161" />
                  <br />
                  <span>Placas</span>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="menu">
                  <Guests fill="#013161" />
                  <br />
                  <span>Convidados</span>
                </div>
              </Grid>
            </>
          ) : (
            <>
              <h4>Você perdeu!</h4>
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
