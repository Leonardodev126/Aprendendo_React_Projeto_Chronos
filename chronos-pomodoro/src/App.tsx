import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import "./styles/theme.css";
import "./styles/global.css";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

export function App() {
  // Todos os componentes que usam número, saibam das mudanças em seu valor.
  const [numero, setNumero] = useState(0);

  // Sempre que eu usar useState, não vou usar atribuição diretamente
  function handleClick() {
    
    // setNumero((prevState) => prevState + 1); Se precisar usar o valor anterior
    setNumero(numero + 1);
  }

  return (
    <>
      <Heading>Número: <span id="numero">{numero}</span></Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo>LOGO</Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput labelText={numero.toString()} id="input" type="text" required placeholder="Digite algo" />
          </div>

          <div className='formRow'>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}