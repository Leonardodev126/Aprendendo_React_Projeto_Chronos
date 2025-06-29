import type { HomeProps } from "../../pages/Home"
import styles from "./index.module.css"


export function CountDown({ estado }: HomeProps) {
    return (
        <div className={styles.container}>{estado.formattedSecondsRemaining}</div>
    )
}

