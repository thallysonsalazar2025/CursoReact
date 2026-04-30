import React from 'react';
import './App.css';
import FirstComponents from './components/FirstComponents';
import TemplateExpressions from "./components/TemplateExpressions";
// comentario comun
function App() {
  return (
    <div className="App">
     <h1>Welcome to React App!</h1>
        {/* Primeiro Desafio Incluir Tag na pagina */}
        <h1>Primeiro Desafio Incluir Tag na pagina</h1>
        <p className="teste">Meu texto</p>
        <FirstComponents />
        <TemplateExpressions />
    </div>
  );
}

export default App;
