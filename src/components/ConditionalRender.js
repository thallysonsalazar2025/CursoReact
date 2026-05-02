import {useState} from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("matheus");
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Sim, pois x é verdadeiro</p>}
            {/*condicao ternaria*/}
            {name === "Joao" ?(
                    <div><p>Ola Joao</p></div>
            ): (
                <div> <p>nome não encontrado</p> </div>
                )}
            <button onClick={() => setName("Joao")}>Clique aqui</button>
        </div>
    );
};

export default ConditionalRender