import React from 'react';
import './App.css';
//forma de importar imagens do assets usando o valor da variavel
import QUALQUER from "./assets/imagemQualquer.png"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  const name = "Matheus";
  const cars = [
      {id: 1, brand: "Ford", color: "red", km: 10000, newCar: false , year: 2020},
      {id: 2, brand: "Kia", color: "Branco", km: 80000, newCar: false, year: 2022 },
      {id: 3, brand: "Renault", color: "blue", km: 235000, newCar: false, year: 2024 }
  ];
    const users = [
        {id: 1, name: "Matheus", age: 20, profession: "Programador"},
        {id: 2, name: "João", age: 25, profession: "Estagiário"},
        {id: 3, name: "Pedro", age: 15, profession: "Estudante"}];

  function showUserName() {
      console.log("Função executada no App.tsx componente pai!");
  }
  const [message, setMessage] = React.useState("Hello World");

  const handleMessage = (msg: string) => {
      setMessage(msg);
  }
  return (

    <div className="App">
      <header className="App-header">
        <h1>Avancei no React!!!</h1>
          <ManageData />
          <ListRender />
          <ConditionalRender />
          <ExecuteFunction myFunction={showUserName}/>
          <Message msg={message}/>
          {users.map(user => (
              <UserDetails key={user.id}
                           user={user} />
          ))}

          {/* */}
          <ChangeMessageState handleMessage={handleMessage}/>
          <Fragment proFragment = "terceiro titulo"/>
          {/*Childrren component possibilita inclusão de codigo html*/}
          <Container myValue="teste">
              <h2>Conteudo do container</h2>
          </Container>
        {/*Props*/}
          <ShowUserName name= {name} />
        {/*Destructuring*/}
        <CarDetails brand="Ford" Km={11000} year={2016} color="Branco" newCar={ false}/>
        {/*Reaproveitando o componente*/}
        <CarDetails brand="Fiat" Km={90000} year={2020} color="Azul" newCar={ false}/>
        <CarDetails brand="WV" Km={0} year={2026} color="Azul" newCar={ true}/>


          {/*Loop de renderização de componente*/}
          {cars.map(car => (
              <CarDetails
                  key={car.id}
                  brand={car.brand}
                  color={car.color}
                  Km={car.km}
                  newCar={car.newCar}
                  year={car.year}
              />

          ))}



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
