import React from "react";
import LoginComponent from "../../components/LoginComponent";

import { Container, Card, Title } from "./styles";

export function Login() {
  return (
    <Container>
      <Card>
        <Title>Portal Farmácia</Title>
        <LoginComponent />
      </Card>
    </Container>
  );
}