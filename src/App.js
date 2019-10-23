import React, { useState } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
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
      <img src={logo} className="App-logo" alt="logo" />
      <div className="question-card">
        <p className="question">
          Na programação como é chamado o conceito que protege um atributo no
          modelo de Classes?
        </p>
      </div>
      <div className="answer-card">
        {respostas.map(resposta => (
          <div className="answer" key={resposta.option}>
            <div
              className="option"
              onClick={() => {
                if (resposta.correct) {
                  alert("Resposta Correta");
                } else {
                  alert("Resposta Errada!");
                }
              }}
            >
              <span className="number">{resposta.option}</span>
              <span className="text"> {resposta.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
