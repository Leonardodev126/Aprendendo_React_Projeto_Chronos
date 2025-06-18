import React, { Children } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { MainForm } from "../../components/MainForm";
import { Menu } from "../../components/Menu";

type MainTemplatesProps = {
  children: React.ReactNode;
}


export function MainTemplate({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Logo>LOGO</Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}