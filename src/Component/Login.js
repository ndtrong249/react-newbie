import { useForm } from "react-hook-form";
import React, { Component } from "react";
import { Tooltip } from "reactstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    history.push("/");
  };

  const requiredStyle = {
    border: "red 1px solid"
  };
  console.log(props);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        ref={register({ required: true, maxLength: 20 })}
        style={errors.firstName && requiredStyle}
        id="firstNameID"
      />
      <Tooltip
        placement="top"
        isOpen={errors.firstName && true}
        target="firstNameID"
        className="tooltip-danger"
        autohide={true}
      >
        Required text
      </Tooltip>
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
export default Login;
