import {useState} from "react";

const ListRender = () => {
    const [users] = useState([
        {id: 1, name: "joao Pedro", age: 20},
        {id: 2, name: "maria", age: 22},
        {id: 3, name: "pedro", age: 23}]);

    const [items] = useState(['Apple', 'Banana', 'Cherry']);
    return (
        <div>
            <ul>
                {items.map((item,i) => (
                    <li key={i} >{item}</li>
                ))}
            </ul>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListRender;