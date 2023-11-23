import styles from "./navbar.module.css"

export default function Navbar(){
    return(
        <div className={styles.container}>
      <p>
        <a href="/homepage" className={styles.button}>Homepage</a>
      </p>
      <p>
        <a href="/search" className={styles.button}>Search</a>
      </p>
      <p>
        <a href="/citypage" className={styles.button}>Citypage</a>
      </p>
      <p>
        <a href="/favorites" className={styles.button}>Favorites</a>
      </p>
    </div>
    )
}