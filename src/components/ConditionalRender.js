import {useState} from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Sim, pois x é verdadeiro</p>}
        </div>
    );
};

export default ConditionalRender