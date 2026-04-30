const Events = () => {
    function handleMyEvent(e) {
        console.log(e);
    }

    return(
        <div>
            <div>
                <button onClick= {handleMyEvent}>Click aqui</button>
            </div>
            <h1>Eventos em React</h1>
        </div>
    );
}

export default Events;