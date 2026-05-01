const Events = () => {
    function handleMyEvent(e) {
        console.log(e);
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
        </div>
    );
}

export default Events;