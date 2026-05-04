
const UserDetails = ({ user }) => {
    return (
        <div>
            <h2>Detalhes do usuário</h2>
            <ul>
                <li key={user.id}>
                    {user.name} - {user.age} anos - {user.profession}
                    {user.age >= 18 ? (
                        <p>Permissão para tirar a Habilitação concedida</p>
                    ) : (
                        <p>Idade não permitida para tirar a Habilitação</p>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default UserDetails;