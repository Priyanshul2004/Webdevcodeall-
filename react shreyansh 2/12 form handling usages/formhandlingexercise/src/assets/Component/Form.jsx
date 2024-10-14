import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleFormsubmitdata}) {

    const {register,handleSubmit,reset} = useForm()

    const handleFormSubmit = (data) => { 
      handleFormsubmitdata(data);
      reset();
    }


  return (
    <div className='mt-10 flex justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')}  className='rounded-md px-2 text-base font-semibold outline-none' placeholder='name' type='text'></input>
        <input {...register('emai')} className='rounded-md px-2 text-base font-semibold outline-none' placeholder='email' type='text'></input>
        <input {...register('image')} className='rounded-md px-2 text-base font-semibold outline-none' placeholder='image url' type='text'></input>
        <input className=' text-white font-semibold rounded-md px-2 py-1 bg-blue-500' type='submit'></input>
      </form>
    </div>
  )
}

export default Form