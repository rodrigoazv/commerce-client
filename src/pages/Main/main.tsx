import React from "react";
// import { Content } from "./styles";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout";
import Banner from "../../components/Common/Banner";
import LeadCap from "../../components/Common/LeadCap";
import CardMapped from "../../components/MappedCard";

const Sizing = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  flex-direction: column;
`;

const Login: React.FC = () => (
  <Layout>
    <Sizing>
      <Grid container spacing={0}>
        <Banner />
        <Grid item xs={12}>
          <CardMapped />
        </Grid>
        <Grid item xs={12}>
          <LeadCap />
        </Grid>
      </Grid>
    </Sizing>
  </Layout>
);

export default Login;
