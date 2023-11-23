import styles from "./citypage.module.css"

export default function Citypage(){
    return (
        <div>
            <h1>City Page</h1>
            <p>
                <a href="/" className={styles.button}>Back</a>
            </p>
        </div>
    )
}