import styles from "./homepage.module.css"

export default function Homepage(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>
                <a href="/" className={styles.button}>Back</a>
            </p>
        </div>
    )
}