import React from 'react';
import { useForm } from "react-hook-form"

type Profile = {
  firstName: string,
  lastName: string,
  age: number
}


const SampleForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<Profile>();

  const funcSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <form onSubmit={funcSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input {...register("firstName")} type="text" name='firstName' id='firstName'/>
        {
        errors.firstName && <div>{errors.firstName}</div>
        }
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input {...register("lastName")} type="text" name='lastName' id='lastName'/>
        {
        errors.lastName && <div>{errors.lastName}</div>
        }
      </div>
      <div>
        <label htmlFor='age'>Age</label>
        <input {...register("age")} type="text" name='age' id='age'/>
        {
        errors.age && <div>{errors.age}</div>
        }
      </div>
      <button type='submit'>Save</button>
    </form>
  );
}

export default SampleForm