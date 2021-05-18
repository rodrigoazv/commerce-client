/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
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
    padding: 12px 130px;
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
  nome: yup.string().required("Preencha com seu nome completo"),
});

const Login: React.FC = () => {
  const initialValues: any = { email: "", nome: "" };
  const sendLead = (values: any) => {
    console.log(values);
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
              <h2> Participe de nossas news com promoções e novidades!</h2>
              <Forms>
                <InputStyle>
                  <TextField
                    name="nome"
                    placeholder="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={values.nome}
                    error={touched.nome && Boolean(errors.nome)}
                    onChange={handleChange}
                  />
                  <span>
                    <ErrorMessage name="nome" />
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
            </FormBanner>
          )}
        </Formik>
      </ContainerLayout>
    </Container>
  );
};

export default Login;
