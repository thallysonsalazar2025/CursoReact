//Incluindo o Destruction
const CarDetails = ({brand, Km, year, color, newCar}) => {
  return (
      <div>
          <h2>Detalhes do carro</h2>
          <li>Marca: {brand}</li>
          <li>Km: {Km}</li>
          <li>Cor: {color}</li>
          <li>Novo: {newCar ? 'Sim' : 'Não'}</li>
      </div>
  );
}

export default CarDetails;