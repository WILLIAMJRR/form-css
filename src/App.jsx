import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import UserCard from './components/UserCard';
import Form from './components/Form';

function App() {
    const [users, setUsers] = useState();
    const [updateInfo, setupdateInfo] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const getallUsers = () => {
        const url = 'https://users-crud.academlo.tech/users/';

        Axios.get(url)
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getallUsers();
    }, []);

    const createNewUser = (data) => {
        const url = 'https://users-crud.academlo.tech/users/';
        Axios.post(url, data)
            .then((res) => {
                console.log(res.data);
                getallUsers();
            })
            .catch((err) => console.log(err));
    };

    const deleteUserById = (id) => {
        const url = `https://users-crud.academlo.tech/users/${id}/`;
        Axios.delete(url)
            .then((res) => {
                console.log(res.data);
                getallUsers();
            })
            .catch((err) => console.log(err));
    };

    const updateUserById = (id, data) => {
        const url = `https://users-crud.academlo.tech/users/${id}/`;
        Axios.put(url, data)
            .then((res) => {
                console.log(res.data);
                getallUsers();
                setupdateInfo();
            })
            .catch((err) => console.log(err));
    };
    const handleOpen = () => setIsOpen(true); //abrir formulario
    const handleClose = () => setIsOpen(false); //cerrar formulario

    return (
        <div className='app'>
            <header className='app_header'>
                <h2 className='app_title'>Register Users</h2>
            </header>

            <button className='app_btn_form' onClick={handleOpen}>
                <i className='fa-solid fa-up-right-from-square '></i>open form
            </button>

            <div className='user_container'>
                {users?.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        deleteUserById={deleteUserById}
                        setupdateInfo={setupdateInfo}
                        handleOpen={handleOpen}
                    />
                ))}
            </div>

            {/* se crea un div para hacer un modal que ocupa toda la pantala */}
            <div className={`app_form ${isOpen && 'app_form_visible'}`}>
                <Form
                    createNewUser={createNewUser}
                    updateInfo={updateInfo}
                    updateUserById={updateUserById}
                    handleClose={handleClose}
                    setupdateInfo={setupdateInfo}
                />
            </div>
        </div>
    );
}

export default App;
