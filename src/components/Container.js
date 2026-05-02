//com a propriedade children possibilita abraçar o conteudo do componente filho
const Container = ({children, myValue}) => {
    return (
        <div>
            <h2>Container</h2>
            {children}
            <p>Valor: {myValue}</p>
        </div>
    )
}
export default Container;