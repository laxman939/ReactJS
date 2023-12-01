import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormFields = {
  email: string,
  password: string,
  confirmPassword: string,
  acceptTerms: boolean
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is invalid")
    .required("Email is required"),
    password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must not exceed 16 characters"),
    confirmPassword: yup.string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: yup.bool().oneOf([true], "Accept Terms is required")
});

const Step1 = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data: FormFields) {
    console.log(JSON.stringify(data, null, 2));
    navigate("/finalform");
  }

  return (
    <Container className="register-form">
      <Typography variant="h4" className="heading-step">
        Step 1
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
        <input
          {...register("email")}
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <br />
       <div className="form-group">
         <label>Password</label>
       <input
          {...register("password")}
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
       </div>
        <br />
        <div className="form-group">
          <label>Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          className={`form-control ${
            errors.confirmPassword ? 'is-invalid' : ''
          }`}
        />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>
        <br />
        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>
        <br/>
        <div className="d-flex gap-3">
          <Button type="submit" variant="contained" color="primary">
          Next
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
  );
};

export default Step1;

// Bezkoder
