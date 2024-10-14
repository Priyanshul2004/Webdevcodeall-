import React from 'react';
import { useForm } from 'react-hook-form';

function Third() {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name')} type='text' placeholder='Name' />
                <input type='submit' />
            </form>
        </div>
    );
}

export default Third;

