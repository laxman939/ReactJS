import { Button, Container, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type Profile = {
  firstName: string,
  lastName: string,
}

const schema = yup.object().shape({
  firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers")
  .required("First name is required"),
  lastName: yup.string().matches(/^([^0-9]*)$/, "Last name should not contain numbers")
  .required("Last name is required"),
});

const Step1 = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<Profile>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  function onSubmit(data : any){
    navigate("/step2")

  }

  return (
  <Container>
    <Typography variant='h4' className='heading-step'>Step 1</Typography>
    <form>
      <TextField {...register("firstName")} name="fisrtName" type="text" placeholder="First Name" 
      label="First Name" variant="outlined" size='small'
      error={!!errors.firstName} helperText={errors?.firstName?.message}/><br/>
      <TextField {...register("lastName")} name="lastName" type="text" placeholder="Last Name" 
      label="Last Name" variant="outlined" size='small'
      error={!!errors.lastName} helperText={errors?.lastName?.message}/>
      <br/>
      <Button type='submit' variant='contained' color='primary'>Next</Button>
    </form>
  </Container>
  )
}

export default Step1