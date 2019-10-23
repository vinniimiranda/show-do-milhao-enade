import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from "./logo.png";
import "./App.css";

function App() {
  const notifySucces = () => toast.success('Reposta Correta');
  const notifyError = () => toast.error('Reposta Incorreta');
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
     <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} />
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
                  notifySucces() 
                 
            
                } else {
                  notifyError() 
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
