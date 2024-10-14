import React from 'react'
import {useForm} from "react-hook-form"

const Reacthookform = () => {

    const {register,handleSubmit} = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit((data)=>console.log(data))}>
        <input {...register('name')} type='text' placeholder='name' />
        <input {...register('email')} type='email' placeholder='email'/>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Reacthookform
