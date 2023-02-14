import React from 'react';
import './styles/usercard.css'

const UserCard = ({ user, deleteUserById, setupdateInfo, handleOpen }) => {
    
    const handleDelete = () => {
        deleteUserById(user.id);
       
    };

    const handleUpdateInfo = () => { 
        setupdateInfo(user);
        handleOpen()
     }
    return (
        <article className='user_card'>

            <h3 className='user_title'> <i className='fa-solid fa-user'></i> {`${user.first_name} ${user.last_name}`}</h3>

            <ul className='user_list'>

                <li className='user_card_item'><i className='fa-regular fa-envelope'></i> Email : <span className='user_card_email'>{user.email}</span></li>
                <li className='user_card_item'><i className='fa-solid fa-key'></i> Password : <span className='user_card_password'>{user.password}</span></li>
                <li className='user_card_item'><i className='fa-solid fa-cake-candles'></i> Birthday : <span className='user_card_birthday'>{user.birthday}</span></li>
             
            </ul>

            <div className='btn_info'>

            <button className='btn_delete' onClick={handleDelete}> <i className='fa-regular fa-trash-can fa-2x'></i></button>
            <button className='btn_update' onClick={handleUpdateInfo}> <i className='fa-regular fa-pen-to-square fa-2x'></i></button>

            </div>
            
        </article>
    );
};

export default UserCard;

