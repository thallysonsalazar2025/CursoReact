import {useState} from "react";

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() =>  (someData = 15)}>Alterar Valor</button>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() =>  setNumber(25)}>Alterar Valor</button>
            </div>
        </div>


    )
}
export default ManageData;