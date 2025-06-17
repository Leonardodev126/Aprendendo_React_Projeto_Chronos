import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvaliableThemes = "dark" | "light"

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>("dark")

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault() // Tirando o comportamento padrão do link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"
      return nextTheme
    })
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependência", Date.now())
  // }) // Executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect executado apenas uma vez com array vazia", Date.now())
  // }, []) // Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
     console.log("Theme mudou", theme, Date.now())
     document.documentElement.setAttribute("data-theme", theme)

     return () => {
      console.log("Este componente será atualizado")
     }
  }, [theme]) // Executa apenas quando o valor de Theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href='#' aria-label="Ir para a Home" title="Ir para a Home">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label="Ver histórico" title="Ver histórico">
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label="Configurações" title="Configurações">
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label="Mudar tema" title="Mudar tema" onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </nav>
  );
}
