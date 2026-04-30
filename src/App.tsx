import React from 'react';
import './App.css';
import FirstComponents from './components/FirstComponents';
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
// comentario comun
function App() {
  return (
    <div className="App">
     <h1>Welcome to React App!</h1>
        {/* Primeiro Desafio Incluir Tag na pagina */}
        <h1>Primeiro Desafio Incluir Tag na pagina</h1>
        <p className="teste">Meu texto</p>
        <FirstComponents />
        <MyComponent   />
        <TemplateExpressions />
        <Events />
    </div>
  );
}

export default App;
