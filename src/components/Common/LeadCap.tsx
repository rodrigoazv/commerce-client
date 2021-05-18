/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ContainerLayout } from "../Common/Container";
// import { Content } from "./styles";

export const Container = styled.div`
  width: 100%;
  width: 100%;
  background: #f2f2f2;
`;

export const FormBanner = styled.form`
  height: 146px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1400px) {
    margin: 10px 15px;
    height: 346px;
  }
`;

export const Forms = styled.div`
  height: 146px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    height: 200px;
  }
`;

export const Button = styled.button`
  display: flex;
  background: #333;
  color: #fff;
  padding: 12px 30px;
  border-radius: 4px;
  border: none;
  @media (max-width: 1400px) {
    padding: 12px 100px;
    text-align: center;
    width: 100%;
  }
`;

export const InputStyle = styled.div`
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  color: red;
  height: 50px;
  @media (max-width: 1400px) {
    margin: 10px 5px;
    width: 100%;
    height: 35px;
  }
`;

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Preencha com um e-mail válido")
    .required("Informe um email"),
  name: yup.string().required("Preencha com seu nome completo"),
});

const Login: React.FC = () => {
  const initialValues: any = { email: "", name: "" };
  const [status, setStatus] = useState(false);
  const sendLead = async (values: any) => {
    const resp: any = await axios.post(
      `https://corebiz-test.herokuapp.com/api/v1/newsletter`,
      values,
    );
    if (resp.data.message) {
      setStatus(true);
    }
  };
  return (
    <Container>
      <ContainerLayout>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => sendLead(values)}
          validationSchema={loginSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <FormBanner onSubmit={handleSubmit}>
              {status ? (
                <>
                  <h2>
                    {" "}
                    <b>Seu e-mail foi cadastrado com sucesso!</b>
                  </h2>
                  <p>
                    A partir de agora você receberá as novidade e ofertas
                    exclusivas.
                  </p>
                  <InputStyle>
                    <Button onClick={() => setStatus(false)}>
                      Cadastrar novo email !
                    </Button>
                  </InputStyle>
                </>
              ) : (
                <>
                  <h2> Participe de nossas news com promoções e novidades!</h2>
                  <Forms>
                    <InputStyle>
                      <TextField
                        name="name"
                        placeholder="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={values.name}
                        error={touched.name && Boolean(errors.name)}
                        onChange={handleChange}
                      />
                      <span>
                        <ErrorMessage name="name" />
                      </span>
                    </InputStyle>
                    <InputStyle>
                      <TextField
                        name="email"
                        placeholder="Email"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={handleChange}
                        value={values.email}
                        error={touched.email && Boolean(errors.email)}
                      />
                      <span>
                        <ErrorMessage name="email" />
                      </span>
                    </InputStyle>
                    <InputStyle>
                      <Button type="submit">Eu Quero !</Button>
                    </InputStyle>
                  </Forms>
                </>
              )}
            </FormBanner>
          )}
        </Formik>
      </ContainerLayout>
    </Container>
  );
};

export default Login;
