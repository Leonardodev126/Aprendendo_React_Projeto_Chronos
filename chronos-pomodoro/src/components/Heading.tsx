import styles from "./Heading.module.css";

type HeadingProps = {
    children: React.ReactNode; // Para o o children aceitar qualquer coisa do React
}

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>
}