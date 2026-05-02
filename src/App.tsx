import React from 'react';
import './App.css';
//forma de importar imagens do assets usando o valor da variavel
import QUALQUER from "./assets/imagemQualquer.png"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Matheus";
  return (

    <div className="App">
      <header className="App-header">
        <h1>Avancei no React!!!</h1>
          <ManageData />
          <ListRender />
          <ConditionalRender />
        {/*Props*/}
          <ShowUserName name= {name} />
        {/*Destructuring*/}
        <CarDetails brand="Ford" Km={11000} year={2016} color="Branco" newCar={ false}/>
        <CarDetails brand="Fiat" Km={90000} year={2020} color="Azul" newCar={ false}/>
        <CarDetails brand="WV" Km={0} year={2026} color="Azul" newCar={ true}/>

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
