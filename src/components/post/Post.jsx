import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/comment'
import styles from './post.module.css'

export function Post(props) {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src="https://github.com/anaspinetti.png" />
                        <div className={styles.authorInfo}>
                            <string>Ana Spinetti</string>
                            <span>Teste</span>
                        </div>

                    </div>
                        <time dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        placeholder='Deixe seu comentário'
                    />
                    <button type='submit'>Publicar</button>
                </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
            </article>
        </>
    )
}