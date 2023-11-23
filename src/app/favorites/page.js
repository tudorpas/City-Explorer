import styles from "./favorites.module.css"

export default function Favorites(){
    return(
        <div>
            <h1>Favorites</h1>
            <p>
                <a href="/" className={styles.button}>Back</a>
            </p>
        </div>
    )
}