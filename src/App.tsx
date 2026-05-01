import React, { useState } from 'react';
import './App.css';
import FirstComponents from './components/FirstComponents';
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
// comentario comun
function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  return (
    <div className="App">
     <h1>Welcome to React App!</h1>
        {/* Primeiro Desafio Incluir Tag na pagina */}
        <h1>Primeiro Desafio Incluir Tag na pagina</h1>
        <p className="teste">Meu texto</p>
        {/* recebe os valores para o metodo challenge */}
        <p>Insira o primeiro valor: <input type="number" onChange={(e) => setN1(Number(e.target.value))} /></p>
        <p>Insira o segundo valor: <input type="number" onChange={(e) => setN2(Number(e.target.value))} /></p>
        {/* atribua ao metodo challenge os valores vindo do input*/}
        { Challenge(n1, n2)}
        <FirstComponents />
        <MyComponent   />
        <TemplateExpressions />
        <Events />
    </div>
  );
}

export default App;
