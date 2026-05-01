const Events = () => {
    function handleMyEvent(e) {
        console.log(e);
    }
    //Executando tamplate dentro do jsx utilizando a funçaõ
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando algo</h1>
        } else {
            return <h1>também posso Renderizar </h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click aqui</button>
            </div>
            {/** Outra forma de disparar um eventos funcoes nos eventos*/}
            <div>
                <button onClick={() => console.log('Evento disparado')}>Click aqui também</button>
            </div>

            <div>
                <button onClick={() => {
                    if (true) {
                        console.log('Evento disparado');
                    }
                }}>Click aqui também
                </button>
            </div>
            <h1>Eventos em React</h1>
            {renderSomething(true)}
        </div>
    );
}

export default Events;