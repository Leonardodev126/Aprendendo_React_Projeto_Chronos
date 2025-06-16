import styles from "./styles.module.css"

export function Footer() {
  return <footer className={styles.footer}>
    <a href="">Entenda omo funciona a técninca pomodoro</a>
    <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Aproveite os estudos</a>
  </footer>
}