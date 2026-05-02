import React from 'react';
import './App.css';
//forma de importar imagens do assets usando o valor da variavel
import QUALQUER from "./assets/imagemQualquer.png"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Avancei no React!!!</h1>
          <ManageData />
          <ListRender />
          <ConditionalRender />
      </header>
        {/** Inclui imagens do public*/}
        <div>
          <img src="/perfil.jpeg" alt="Perfil" />
        </div>

        {/** Inclui imagens do assets*/}
        <div>
            <img src={QUALQUER} alt="imagem qualquer" />
        </div>
    </div>

  );
}

export default App;
