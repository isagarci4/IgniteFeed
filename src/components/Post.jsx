import styles from './Post.module.css'

export function Post() {
    return(
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/isagarci4.png" />
            <div className={styles.authorInfo}>
              <strong>Isadora Garcia</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time>Publicado há 1h</time>
        </header>
      </article>
    )
}