import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import defaultValues from '../utils/DefaultValues';

function Form({
    createNewUser, updateInfo, updateUserById, handleClose, setupdateInfo,
}) {
    
    const { reset, register, handleSubmit } = useForm();

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo);
        }
    }, [updateInfo]);

    const submit = (data) => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data);
        } else {
            createNewUser(data);
        }
        handleClose();
        reset(defaultValues);
    };

    const handlex = () => {
        handleClose();
        reset(defaultValues);
        setupdateInfo();
    };

    return (
        <div className='form_container'>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h2 className='form_title'> Form Users</h2>
                <span></span>
                <p className='form_x' onClick={handlex}>
                    <i className='fa-solid fa-x fa-2x'></i>
                </p>

                <div className='form_item'>
                    <label className='form_label' htmlFor='email'>
                        <i className='fa-regular fa-envelope'></i> Email
                    </label>
                    <input
                        className='form_input'
                        {...register('email')}
                        type='email'
                        id='email'
                        placeholder='You email' />
                </div>

                <div className='form_item'>
                    <label className='form_label' htmlFor='password'>
                        <i className='fa-solid fa-key'></i> Password
                    </label>
                    <input
                        className='form_input'
                        {...register('password')}
                        type='password'
                        placeholder='Password' />
                </div>

                <div className='form_item'>
                    <label className='form_label' htmlFor='firstName'>
                        <i className='fa-solid fa-user'></i> First name
                    </label>
                    <input
                        className='form_input'
                        {...register('first_name')}
                        type='text'
                        id='firstName'
                        placeholder='Name' />
                </div>

                <div className='form_item'>
                    <label className='form_label' htmlFor='lastName'>
                        <i className='fa-solid fa-list-ol'></i> Last nameLast
                        name
                    </label>
                    <input
                        className='form_input'
                        {...register('last_name')}
                        type='text'
                        id='lastName'
                        placeholder='Last name' />
                </div>

                <div className='form_item'>
                    <label className='form_label' htmlFor='birthday'>
                        <i className='fa-solid fa-cake-candles'></i> Birthday
                    </label>
                    <input
                        className='form_input_date'
                        {...register('birthday')}
                        type='date'
                        id='birthday' />
                </div>

                <button className='form_btn'>
                    {updateInfo ? (
                        <i className='fa-solid fa-circle-check fa-2x'></i>
                    ) : (
                        <i className='fa-solid fa-user-plus fa-2x'></i>
                    )}
                </button>
            </form>
        </div>
    );
}

export default Form;
