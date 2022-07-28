import React from 'react'
import { Container, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormFields2 = {
  fullName: string;
  userName: string
}

const formSchema2 = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  userName: yup.string().required("Username is required")
  .min(6, "Username must be at least 6 characters")
  .max(12, "Username must not exceed 12 characters" )
})

const FinalForm: React.FC = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, formState : {errors}, reset} = useForm<FormFields2>({
    resolver: yupResolver(formSchema2)
  })

  function onSubmit (data: FormFields2) {
    console.log(JSON.stringify(data, null, 2));
    navigate("/result")
  }

  return (
    <Container className="register-form">
      <Typography variant="h4" className="heading-step">
        Step 2
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
        <input
          {...register("fullName")}
          type="text"
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
        />
          <div className="invalid-feedback">{errors.fullName?.message}</div>
        </div>
        <br />

        <div className="form-group">
          <label>Username</label>
        <input
          {...register("userName")}
          type="text"
          className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
        />
          <div className="invalid-feedback">{errors.userName?.message}</div>
        </div>
        <br />

        <div className="d-flex gap-3">
          <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
            type="reset"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
        </Button>
        </div>
      </form>
    </Container>
  )
}

export default FinalForm