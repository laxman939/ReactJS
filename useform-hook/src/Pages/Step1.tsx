import { Button, Container, Input } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Profile = {
  firstName: string,
  lastName: string,
}

const Step1 = () => {

  const { register, handleSubmit, formState: errors } = useForm<Profile>();
  const navigate = useNavigate();

  function onSubmit(data : any){
    navigate("/step2")

  }

  return (
  <Container>
    <h2>Step 2</h2>
    <form>
      <Input ref={register} name="fisrtName" type="text" placeholder="First Name"/>
      <Input ref={register} name="lastName" type="text" placeholder="Last Name"/>
      <Button type='submit' fullWidth variant='contained' color='primary'>Next</Button>
    </form>
  </Container>
  )
}

export default Step1