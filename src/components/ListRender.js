import {useState} from "react";
const ListRender = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "joao Pedro", age: 20},
        {id: 2, name: "maria", age: 22},
        {id: 3, name: "pedro", age: 23}]);

    const [items] = useState(['Apple', 'Banana', 'Cherry']);
    {/*função para deletar um item do array*/}
    const deleteRandomItem = () => {
        const randomNumber = Math.floor(Math.random() * users.length);
        //  atraves do prevUsers é possivel filtrar os usrs com id atual e realizar
        //  a exclusão dos id diferente do esperado
        setUsers((prevUsers) => {
            return prevUsers.filter((user, index) => index !== randomNumber);
        })
    }
    return (
        <div>
            <ul>
                {items.map((item,index) => (
                    <li key={index} >{item}</li>
                ))}
            </ul>
            {/*Em cenario real a propriedade key é cpturada do banco de dados exemplo  a entidade users: */}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            {/*botão que gera acao para deletar um item do array*/}
            <button onClick={deleteRandomItem}>Delete ramdom users</button>
        </div>
    );
};

export default ListRender;