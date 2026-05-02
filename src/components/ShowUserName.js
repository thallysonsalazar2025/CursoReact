const ShowUserName = (props) => {
    return (
        <div>
            {/*O valor da propriedade name vem do componente pai ue no caso é o App.tsx*/}
            <h2>O nome do Usuario:{props.name} </h2>
        </div>
    )
}
export default ShowUserName;