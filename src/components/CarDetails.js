//Incluindo o Destruction
const CarDetails = ({brand, Km, year, color}) => {
  return (
      <div>
          <h2>Detalhes do carro</h2>
          <li>Marca: {brand}</li>
          <li>Km: {Km}</li>
          <li>Cor: {color}</li>
      </div>
  );
}

export default CarDetails;