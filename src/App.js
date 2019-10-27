import React, { useState, useEffect } from "react";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";



import "./App.css";
import Audio from "./audio/index";
import mocked from "./mock/perguntas";
import Button from "@material-ui/core/Button";
import { Cards, Arrow, Numbers, Guests } from "./components/HelpMenu";


function App() {
  const [errou, setErrou] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [count, setCount] = useState(0);
  const [pergunta, setPergunta] = useState(mocked[count]);

  useEffect(() => {
    setPergunta(mocked[count]);
  }, [count]);
  const submit = (resposta, i) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Você tem certeza?</h1>
            <p>Deseja confirmar sua resposta?</p>
            <Button variant="contained" id="cancel" onClick={onClose}>Não</Button>
            <Button variant="contained" id="ok"
              onClick={() => {
                if (resposta.correct) {
                  let correct = document.getElementById(`resposta${i}`);
                  correct.className += " blink ";
                  Audio.certaResposta.play();
                  setTimeout(() => {
                    correct.className = "option";
                    setCount(count + 1);
                  }, 2000);
                  setTimeLeft(45);
                } else {
                  Audio.errou.play();
                  let correct = document.getElementById(`resposta${i}`);
                  correct.className += " blinkErrou ";
                  setTimeout(() => {
                    correct.className = "option";
                    setErrou(true);
                  }, 2000);
                }
                onClose();
              }}
            >
              Sim
            </Button>
          </div>
        );
      }
    });
  };

  return (
    <div className="App">
      <Container maxWidth="sm" className="container">
        {!errou ? (
          <>
            <Grid container spacing={1}>
              {/* <Grid item xs={12} style={{ textAlign: "center" }}></Grid> */}
              <Grid item xs={12}>
                <div className="question-card">
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <p className="question">{pergunta.pergunta}</p>
                    </Grid>
                    <Grid item xs={4} className="timer">
                      <p className="timeLeft">{timeLeft} seg</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12}>
                {pergunta.respostas.map((resposta, i) => (
                  <div className="answer" key={resposta.option}>
                    <div
                      className="option "
                      id={"resposta" + i}
                      onClick={() => {
                        Audio.confirma.play();
                        submit(resposta, i);
                      }}
                    >
                      <span className="number">{resposta.option}</span>
                      <span className="text"> {resposta.value}</span>
                    </div>
                  </div>
                ))}
              </Grid>
              {/* <Grid item xs={4} className="text-center "> 
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
              </Grid>*/}
              <Grid item xs={3}>
                <Cards />
              </Grid>
              <Grid item xs={3}>
               <Arrow />
              </Grid>
              <Grid item xs={3}>
                <Numbers />
              </Grid>
              <Grid item xs={3}>
                <Guests />
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Grid item xs={12}>
              <h1 style={{ color: "#FFF" }}>Você perdeu!</h1>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">
                Reiniciar
              </Button>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
